import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class LoadingService {

  private _loadingRequestList: Array<string> = new Array<string>();
  
  public loading: boolean = false

  constructor() { }

  public addLoadingRequest(requestUrl: string): void {
    this.loading = true;
    this._loadingRequestList.push(requestUrl)
  }

  public removeLoadingRequest(requestUrl: string): void {
    const requestUrlIndex = this._loadingRequestList.findIndex((request: string) => request === requestUrl);
    if (requestUrlIndex >= 0) {
      this._loadingRequestList.splice(requestUrlIndex, 1);

      if (this._loadingRequestList.length <= 0) {
        this.loading = false;
      }
    }
  }

}
