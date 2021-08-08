import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

import { TaskListService } from 'src/app/core/services/task-list.service';
import { AlertDialogComponent } from 'src/app/view/components/alert-dialog/alert-dialog.component';


@Component({
  selector: 'can-task-item-form',
  templateUrl: './task-item-form.component.html',
  styleUrls: ['./task-item-form.component.scss']
})
export class TaskItemFormComponent {

  private _taskId: number = -1;

  public isEdition: boolean = false;

  public form: FormGroup = this._formBuilder.group({
    id: [null],
    projectId: [null, [Validators.required]],
    name: [null, [Validators.required]],
    description: [null, [Validators.required]],
    tags: [[], [Validators.nullValidator]],
    lastModificationDate: [null, [Validators.nullValidator]],
    creationDate: [null, Validators.nullValidator]
  });

  constructor(
    private _matDialog: MatDialog,
    private _formBuilder: FormBuilder,
    private _taskListService: TaskListService,
    private _bottomSheetRef: MatBottomSheetRef<TaskItemFormComponent>,
  ) { }

  public get F_projectId(): AbstractControl { return this.form.get('projectId')!; }

  public get F_name(): AbstractControl { return this.form.get('name')!; }

  public get F_description(): AbstractControl { return this.form.get('description')!; }

  public get F_tags(): AbstractControl { return this.form.get('tags')!; }

  public get F_lastModificationDate(): AbstractControl { return this.form.get('lastModificationDate')!; }

  public get F_creationDate(): AbstractControl { return this.form.get('creationDate')!; }

  public handleSaveTaskItem(): void {
    if (this.isEdition) {
      this._updateTaskItem();
      return;
    }
    this._createTaskItem();
  }

  private _createTaskItem(): void {
    if (this.form.invalid) {
      return;
    }
    this.F_lastModificationDate.setValue(new Date());
    this.F_creationDate.setValue(new Date());
    const payload = this.form.getRawValue();
    this._taskListService.createTask(payload).subscribe(() => {
      const dialog = this._matDialog.open(AlertDialogComponent);
      dialog.componentInstance.content.title = 'Success';
      dialog.componentInstance.content.message = 'Task item was created successfully.';
      dialog.afterClosed().subscribe(() => this.closeBottomSheet());
    });
  }

  private _updateTaskItem(): void {
    if (this.form.invalid) {
      return;
    }
    const payload = { id: this._taskId, ...this.form.getRawValue() };
    this._taskListService.updateTask(payload).subscribe(() => {
      const dialog = this._matDialog.open(AlertDialogComponent);
      dialog.componentInstance.content.title = 'Success';
      dialog.componentInstance.content.message = 'Task item was updated successfully.';
      dialog.afterClosed().subscribe(() => this.closeBottomSheet());
    });
  }

  public closeBottomSheet(): void {
    this._bottomSheetRef.dismiss();
  }

}
