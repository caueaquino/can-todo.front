import { Component, EventEmitter, Input, Output } from '@angular/core';


import { MatDialog } from '@angular/material/dialog';
import { MatBottomSheet } from '@angular/material/bottom-sheet';


import { TaskListService } from 'src/app/core/services/task-list.service';

import { ITaskList } from 'src/app/shared/interfaces/task-list.interface';
import { ITaskListItem } from 'src/app/shared/interfaces/task-list-item.interface';

import { AlertDialogComponent } from 'src/app/view/components/alert-dialog/alert-dialog.component';
import { TaskItemFormComponent } from 'src/app/view/pages/task-list-project/components/task-item-form/task-item-form.component';


@Component({
  selector: 'can-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.scss']
})
export class TaskListItemComponent {

  @Input() public taskList!: ITaskList;
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
