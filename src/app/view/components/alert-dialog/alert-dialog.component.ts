import { Component } from '@angular/core';


@Component({
  selector: 'can-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss']
})
export class AlertDialogComponent {

  public content = {
    title: '',
    message: '',
    firstButton: '',
    secondButton: 'Ok'
  };

  constructor() { }

  public confirmButton(): void {

  }

}
