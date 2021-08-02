import { Component } from '@angular/core';


import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'can-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private _authService: AuthService,
  ) { }

  public logout(): void {
    this._authService.doLogout();
  }

}
