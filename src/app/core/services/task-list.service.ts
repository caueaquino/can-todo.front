import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { ITaskListItem } from 'src/app/shared/interfaces/task-list-item.interface';
import { Project } from 'src/app/shared/models/project.model';


@Injectable({ providedIn: 'root' })
export class TaskListService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  public getTasksByTaskListId(id: number): Observable<Array<ITaskListItem>> {
    return this._httpClient.get<Array<ITaskListItem>>(`${environment.apiUrl}taskListItems`).pipe(
      map((res: Array<ITaskListItem>) => {
        return res.filter((taskItem: ITaskListItem) => taskItem.projectId == id);
      }));
  }

  public createTask(payload: any): Observable<any> {
    return this._httpClient.post(`${environment.apiUrl}taskListItems`, payload);
  }

  public updateTask(payload: any): Observable<any> {
    return this._httpClient.put(`${environment.apiUrl}taskListItems/${payload.id}`, payload);
  }

  public deleteTaskById(id: number): Observable<any> {
    return this._httpClient.delete(`${environment.apiUrl}taskListItems/${id}`);
  }

}
