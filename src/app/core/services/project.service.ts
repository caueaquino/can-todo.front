import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Project } from 'src/app/shared/models/project.model';
import { EProjectType } from 'src/app/shared/enums/project-type.enum';


@Injectable({ providedIn: 'root' })
export class ProjectService {

  private readonly _BASE_URL = `${environment.apiProject}`;

  constructor(
    private _httpClient: HttpClient,
  ) { }

  public getProjects(): Observable<Array<Project>> {
    return this._httpClient.get<Array<Project>>(`${this._BASE_URL}`);
  }

  public getTaskListProjects(): Observable<Array<Project>> {
    return this._httpClient.get<Array<Project>>(`${this._BASE_URL}`).pipe(map((projects: Array<Project>) => {
      return projects?.filter((p: Project) => p.projectTypeId === EProjectType.TASK_LIST);
    }));
  }

  public getKanbanProjects(): Observable<Array<Project>> {
    return this._httpClient.get<Array<Project>>(`${this._BASE_URL}`).pipe(map((projects: Array<Project>) => {
      return projects?.filter((p: Project) => p.projectTypeId === EProjectType.KANBAN);
    }));
  }


}
