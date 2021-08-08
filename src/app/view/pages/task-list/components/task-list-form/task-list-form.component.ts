import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

import { ProjectService } from 'src/app/core/services/project.service';

import { AlertDialogComponent } from 'src/app/view/components/alert-dialog/alert-dialog.component';


@Component({
  selector: 'can-task-list-form',
  templateUrl: './task-list-form.component.html',
  styleUrls: ['./task-list-form.component.scss']
})
export class TaskListFormComponent {

  private _taskListId: number = -1;

  public isEdition: boolean = false;

  public form: FormGroup = this._formBuilder.group({
    id: [null],
    projectTypeId: [1, [Validators.required]],
    name: [null, [Validators.required]],
    description: [null, [Validators.required]],
    tags: [[], [Validators.nullValidator]],
    targetDate: [null, [Validators.nullValidator]],
    lastModificationDate: [null, [Validators.nullValidator]],
    creationDate: [null, Validators.nullValidator]
  });

  constructor(
    private _matDialog: MatDialog,
    private _formBuilder: FormBuilder,
    private _projectService: ProjectService,
    private _bottomSheetRef: MatBottomSheetRef<TaskListFormComponent>,
  ) { }

  public get F_projectTypeId(): AbstractControl { return this.form.controls.projectTypeId; }

  public get F_name(): AbstractControl { return this.form.controls.name; }

  public get F_description(): AbstractControl { return this.form.controls.description; }

  public get F_tags(): AbstractControl { return this.form.controls.tags; }

  public get F_targetDate(): AbstractControl { return this.form.controls.targetDate; }

  public get F_lastModificationDate(): AbstractControl { return this.form.controls.lastModificationDate; }

  public get F_creationDate(): AbstractControl { return this.form.controls.creationDate; }

  public handleSaveTaskList(): void {
    if (this.isEdition) {
      this._updateTaskList();
      return;
    }
    this._createTaskList();
  }

  private _createTaskList(): void {
    if (this.form.invalid) {
      return;
    }
    this.F_lastModificationDate.setValue(new Date());
    this.F_creationDate.setValue(new Date());
    const payload = this.form.getRawValue();
    this._projectService.createProject(payload).subscribe(() => {
      const dialog = this._matDialog.open(AlertDialogComponent);
      dialog.componentInstance.content.title = 'Success';
      dialog.componentInstance.content.message = 'Task list was created successfully.';
      dialog.afterClosed().subscribe(() => this.closeBottomSheet());
    });
  }

  private _updateTaskList(): void {
    if (this.form.invalid) {
      return;
    }
    this.F_lastModificationDate.setValue(new Date());
    const payload = { id: this._taskListId, ...this.form.getRawValue() };
    this._projectService.updateProject(payload).subscribe(() => {
      const dialog = this._matDialog.open(AlertDialogComponent);
      dialog.componentInstance.content.title = 'Success';
      dialog.componentInstance.content.message = 'Task list was updated successfully.';
      dialog.afterClosed().subscribe(() => this.closeBottomSheet());
    });
  }

  public closeBottomSheet(): void {
    this._bottomSheetRef.dismiss();
  }
}
