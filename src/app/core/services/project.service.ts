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

  public getProjectById(id: number): Observable<Project> {
    return this._httpClient.get<Project>(`${environment.apiUrl}projects/${id}`);
  }

  public createProject(project: Project): Observable<Project> {
    return this._httpClient.post<Project>(this._BASE_URL, project);
  }

  public updateProject(project: Project): Observable<Project> {
    return this._httpClient.put<Project>(`${this._BASE_URL}${project.id}`, project);
  }

  public deleteProject(id: number): Observable<any> {
    return this._httpClient.delete<any>(`${this._BASE_URL}${id}`);
  }

  // TASK_LIST
  public getTaskListProjects(): Observable<Array<Project>> {
    return this._httpClient.get<Array<Project>>(`${this._BASE_URL}`).pipe(map((projects: Array<Project>) => {
      return projects?.filter((t: Project) => t.projectTypeId === EProjectType.TASK_LIST);
    }));
  }

  // KANBAN
  public getKanbanProjects(): Observable<Array<Project>> {
    return this._httpClient.get<Array<Project>>(`${this._BASE_URL}`).pipe(map((projects: Array<Project>) => {
      return projects?.filter((p: Project) => p.projectTypeId === EProjectType.KANBAN);
    }));
  }

}
