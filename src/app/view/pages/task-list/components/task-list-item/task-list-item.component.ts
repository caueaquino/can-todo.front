import { Router } from '@angular/router';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatBottomSheet } from '@angular/material/bottom-sheet';


import { Project } from 'src/app/shared/models/project.model';

import { ERoutePath } from 'src/app/shared/enums/route-path.enum';

import { ProjectService } from 'src/app/core/services/project.service';

import { AlertDialogComponent } from 'src/app/view/components/alert-dialog/alert-dialog.component';
import { TaskListFormComponent } from 'src/app/view/pages/task-list/components/task-list-form/task-list-form.component';


@Component({
  selector: 'can-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.scss']
})
export class TaskListItemComponent {

  @Input() public taskList!: Project;

  @Output() public taskListEvent: EventEmitter<string> = new EventEmitter<string>();

  public isExpanded: boolean = false;

  constructor(
    private _router: Router,
    private _matDialog: MatDialog,
    private _bottomSheet: MatBottomSheet,
    private _projectService: ProjectService,
  ) { }

  public openTaskList(): void {
    this._router.navigateByUrl(`${ERoutePath.TASK_LIST}/${this.taskList.id}`);
  }

  public editTaskList(): void {
    const bottomSheet = this._bottomSheet.open(TaskListFormComponent);
    bottomSheet.instance.form.patchValue(this.taskList);
    bottomSheet.instance.isEdition = true;
    bottomSheet.afterDismissed().subscribe(() => this._emitRefreshEvent());
  }

  public completeTaskList(): void {
    this.taskList.markAsDone();
    this._projectService.updateProject(this.taskList).subscribe(() => this._emitRefreshEvent());
  }

  public deleteTaskList(): void {
    this._projectService.deleteProject(this.taskList.id).subscribe(() => {
      const dialog = this._matDialog.open(AlertDialogComponent);
      dialog.componentInstance.content.title = 'Success';
      dialog.componentInstance.content.message = 'Task list was deleted successfully.';
      dialog.afterClosed().subscribe(() => this._emitRefreshEvent());
    });
  }

  public expandOrColapseItem(): void {
    this.isExpanded = !this.isExpanded;
  }

  private _emitRefreshEvent(): void {
    this.taskListEvent.emit('refresh');
  }
}
