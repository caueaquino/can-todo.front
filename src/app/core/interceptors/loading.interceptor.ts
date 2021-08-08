import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, delay, tap } from 'rxjs/operators';

import { LoadingService } from 'src/app/core/services/loading.service';


@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(
    private _loadingService: LoadingService,
  ) { }

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<any> {
    return next.handle(request)
      .pipe(
        delay(100),
        tap((res: any) => {
          if (res instanceof HttpResponse) {
            this._loadingService.removeLoadingRequest(request.url);

          } else {
            this._loadingService.addLoadingRequest(request.url);
          }
        }),
        catchError((err: any) => {
          this._loadingService.removeLoadingRequest(request.url);
          return err;
        }));
  }

}
