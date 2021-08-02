import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


import { MatDialog } from '@angular/material/dialog';


import { User } from 'src/app/shared/models/user.model';
import { Token } from 'src/app/shared/models/token.model';

import { AuthService } from 'src/app/core/services/auth.service';

import { ERoutePath } from 'src/app/shared/enums/route-path.enum';

import { AlertDialogComponent } from 'src/app/view/components/alert-dialog/alert-dialog.component';


@Component({
  selector: 'can-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  public hide: boolean = true;

  public matcher = new ErrorStateMatcher();

  public signInForm: FormGroup = this._formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required]]
  });

  constructor(
    private _router: Router,
    private _matDialog: MatDialog,
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
  ) { }

  public get F_email(): AbstractControl {
    return this.signInForm.controls.email;
  }

  public get F_password(): AbstractControl {
    return this.signInForm.controls.password;
  }

  public signIn(): void {
    if (this.signInForm.invalid) {
      return;
    }
    this._authService.getPublicKey().subscribe((publicKey: any) => {

      const user = new User(this.signInForm.getRawValue());
      this._authService.signIn(user).subscribe((token: Token) => {
        if (token) {
          this._authService.storeTokens(token);
          this._router.navigateByUrl(ERoutePath.RESUME);
        }
      }, (error: any) => {
        const dialog = this._matDialog.open(AlertDialogComponent);
        dialog.componentInstance.content = {
          title: 'Error',
          message: error.message,
          firstButton: '',
          secondButton: 'Ok'
        }
      });
    });
  }

  public goToSignUp(): void {
    this._router.navigateByUrl(ERoutePath.SIGN_UP);
  }

  public changePasswordVisibility(): void {
    this.hide = !this.hide;
  }

}
