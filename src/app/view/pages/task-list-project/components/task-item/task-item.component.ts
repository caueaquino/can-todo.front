import { Component, EventEmitter, Input, Output } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { Project } from 'src/app/shared/models/project.model';

import { TaskListService } from 'src/app/core/services/task-list.service';

import { ITaskListItem } from 'src/app/shared/interfaces/task-list-item.interface';

import { AlertDialogComponent } from 'src/app/view/components/alert-dialog/alert-dialog.component';
import { TaskItemFormComponent } from 'src/app/view/pages/task-list-project/components/task-item-form/task-item-form.component';


@Component({
  selector: 'can-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {

  @Input() public taskList!: Project;
  @Input() public task!: ITaskListItem;

  @Output() taskListEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private _matDialog: MatDialog,
    private _bottomSheet: MatBottomSheet,
    private _taskListService: TaskListService,
  ) { }

  public editTask(): void {
    const bottomSheet = this._bottomSheet.open(TaskItemFormComponent);
    bottomSheet.instance.form.patchValue(this.task);
    bottomSheet.instance.isEdition = true;
    bottomSheet.afterDismissed().subscribe(() => {
      this.taskListEvent.emit('refresh');
    });
  }

  public deleteTask(id: number): void {
    this._taskListService.deleteTaskById(id).subscribe(() => {
      const dialog = this._matDialog.open(AlertDialogComponent);
      dialog.componentInstance.content.title = 'Success';
      dialog.componentInstance.content.message = 'Task was deleted successfully.';
      dialog.afterClosed().subscribe(() => this.taskListEvent.emit('refresh'));
    });
  }

}
