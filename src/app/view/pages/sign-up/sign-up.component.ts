import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


import { MatDialog } from '@angular/material/dialog';


import { User } from 'src/app/shared/models/user.model';

import { AuthService } from 'src/app/core/services/auth.service';

import { ERoutePath } from 'src/app/shared/enums/route-path.enum';
import { AlertDialogComponent } from '../../components/alert-dialog/alert-dialog.component';


@Component({
  selector: 'can-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  public hide: boolean = true;

  public matcher: ErrorStateMatcher = new ErrorStateMatcher();

  public signUpForm: FormGroup = this._formBuilder.group({
    userName: [null, [Validators.required, Validators.minLength(4)]],
    email: [null, [Validators.required, Validators.email]],
    phone: [null, [Validators.nullValidator, Validators.minLength(11)]],
    password: [null, [Validators.required, Validators.minLength(6)]],
    lastModificationDate: [null],
    creationDate: [null]
  });

  constructor(
    private _router: Router,
    private _matDialog: MatDialog,
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
  ) { }

  public get F_userName(): AbstractControl {
    return this.signUpForm.controls.userName;
  }

  public get F_email(): AbstractControl {
    return this.signUpForm.controls.email;
  }

  public get F_password(): AbstractControl {
    return this.signUpForm.controls.password;
  }

  public get F_lastModificationDate(): AbstractControl {
    return this.signUpForm.controls.lastModificationDate;
  }

  public get F_creationDate(): AbstractControl {
    return this.signUpForm.controls.creationDate;
  }

  public signUp(): void {
    if (this.signUpForm.invalid) {
      return;
    }
    this.F_lastModificationDate.setValue(new Date());
    this.F_creationDate.setValue(this.F_lastModificationDate.value);
    const user = new User(this.signUpForm.getRawValue())
    this._authService.signUp(user).subscribe(() => {
      const dialog = this._matDialog.open(AlertDialogComponent)
      dialog.componentInstance.content.title = 'Success'
      dialog.componentInstance.content.message = 'User was registered successfully.'
      dialog.afterClosed().subscribe(() => this._router.navigateByUrl(ERoutePath.SIGN_IN));
    });
  }

  public changePasswordVisibility(): void {
    this.hide = !this.hide;
  }

  public cancelSignUp(): void {
    this._router.navigateByUrl(ERoutePath.SIGN_IN);
  }

}
