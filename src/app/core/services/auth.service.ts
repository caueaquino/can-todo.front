import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable } from 'rxjs';

import { switchMap } from 'rxjs/operators';


import { User } from 'src/app/shared/models/user.model';
import { Token } from 'src/app/shared/models/token.model';

import { environment } from 'src/environments/environment';

import { ERoutePath } from 'src/app/shared/enums/route-path.enum';


@Injectable({ providedIn: 'root' })
export class AuthService {

  private readonly _ACCESS_TOKEN = 'CAN_ACCESS_TOKEN';
  private readonly _REFRESH_TOKEN = 'CAN_REFRESH_TOKEN';

  constructor(
    private _router: Router,
    private _httpClient: HttpClient,
  ) { }

  public get accessToken(): string {
    return JSON.stringify(localStorage.getItem(this._ACCESS_TOKEN));
  }

  public get refreshToken(): string {
    return JSON.stringify(localStorage.getItem(this._REFRESH_TOKEN));
  }

  public storeTokens(token: any): void {
    localStorage.setItem(this._ACCESS_TOKEN, token.accessToken);
    localStorage.setItem(this._REFRESH_TOKEN, token.refreshToken);
  }

  public getPublicKey(): Observable<string> {
    return this._httpClient.get<string>(`${environment.apiUrl}publicKey`);
  }

  public signIn(user: User): Observable<any> {

    return this._httpClient.get<Array<User>>(`${environment.apiUrl}users`).pipe(
      switchMap((userList: Array<User>) => {
        if (userList.some((userItem: User) => user.isSameAuthUser(userItem))) {
          return this._httpClient.get<Token>(`${environment.apiUrl}token`);
        }
        throw { status: 401, message: 'Invalid credentials.' };
      })
    );


  }

  public signUp(user: User): Observable<any> {
    return this._httpClient.post(`${environment.apiUrl}users`, user);
  }

  public doRefreshToken(): Observable<any> {
    return this._httpClient.get(`${environment.apiUrl}refreshToken`);
  }

  public doLogout(): void {
    localStorage.removeItem(this._ACCESS_TOKEN);
    localStorage.removeItem(this._REFRESH_TOKEN);
    this._router.navigateByUrl(ERoutePath.SIGN_IN);
  }

}
