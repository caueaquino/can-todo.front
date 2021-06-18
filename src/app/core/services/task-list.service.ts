import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { TaskList } from 'src/app/shared/models/task-list.model';


@Injectable({ providedIn: 'root' })
export class TaskListService {

  private readonly _BASE_URL = `${environment.apiTaskList}`;

  constructor(
    private _httpClient: HttpClient
  ) { }

  public getTaskListById(id: number): Observable<TaskList> {
    return this._httpClient.get<TaskList>(`${this._BASE_URL}${id}`);
  }

  public createTask(payload: any): Observable<any> {
    return this._httpClient.post(`${this._BASE_URL}`, payload);
  }

  public updateTask(payload: any): Observable<any> {
    return this._httpClient.put(`${this._BASE_URL}`, payload);
  }

  public deleteTaskById(taskListId: number, taskId: number): Observable<any> {
    return this._httpClient.delete(`${this._BASE_URL}${taskListId}/tasks/${taskId}`);
  }

  public deleteTaskListById(id: number): Observable<any> {
    return this._httpClient.delete(`${this._BASE_URL}${id}`);
  }

}
