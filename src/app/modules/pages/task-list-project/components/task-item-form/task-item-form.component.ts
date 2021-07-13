import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatBottomSheetRef } from '@angular/material/bottom-sheet';


@Component({
  selector: 'can-task-item-form',
  templateUrl: './task-item-form.component.html',
  styleUrls: ['./task-item-form.component.scss']
})
export class TaskItemFormComponent implements OnInit {

  public form: FormGroup = this._formBuilder.group({
    name: [null, [Validators.required]],
    description: [null, [Validators.required]],
    creationDate: [null, Validators.required]
  })

  constructor(
    private _formBuilder: FormBuilder,
    private _bottomSheetRef: MatBottomSheetRef<TaskItemFormComponent>,
  ) { }

  public get F_name(): AbstractControl { return this.form.get('name')!; }

  public get F_description(): AbstractControl { return this.form.get('description')!; }

  public get F_creationDate(): AbstractControl { return this.form.get('creationDate')!; }

  public ngOnInit(): void {
  }

  public createTaskItem(): void {
    
  }
  
  public closeBottomSheet(): void {
    this._bottomSheetRef.dismiss();
  }

}
