import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';

import { Observable } from 'rxjs';

import { AuthService } from 'src/app/core/services/auth.service';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private _authService: AuthService,
  ) { }

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const accessToken = this._authService.accessToken;
    if (accessToken) {
      request = this._addAccessToken(request);
    }
    return next.handle(request);
  }

  private _addAccessToken(request: HttpRequest<unknown>): HttpRequest<unknown> {
    return request;
  }

}
