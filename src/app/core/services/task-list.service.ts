import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { TaskList } from 'src/app/shared/models/task-list.model';
import { ITaskList } from 'src/app/shared/interfaces/task-list.interface';
import { ITaskListItem } from 'src/app/shared/interfaces/task-list-item.interface';


@Injectable({ providedIn: 'root' })
export class TaskListService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  public getTaskListById(id: number): Observable<ITaskList> {
    return this._httpClient.get<TaskList>(`${environment.apiUrl}projects/${id}`).pipe(take(1));
  }

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
    return this._httpClient.put(`${environment.apiUrl}`, payload);
  }

  public deleteTaskById(id: number): Observable<any> {
    return this._httpClient.delete(`${environment.apiUrl}taskListItems/${id}`);
  }

}
