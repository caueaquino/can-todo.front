import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { TaskList } from 'src/app/shared/models/task-list.model';


@Injectable({ providedIn: 'root' })
export class TaskListService {

  private readonly BASE_URL = `${environment.apiTaskList}`;

  constructor(
    private httpClient: HttpClient
  ) { }

  public getTaskListById(id: number): Observable<TaskList> {
    return this.httpClient.get<TaskList>(`${this.BASE_URL}`);
  }

}
