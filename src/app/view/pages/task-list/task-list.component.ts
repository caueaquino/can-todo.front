import { Component, OnInit } from '@angular/core';

import { Project } from 'src/app/shared/models/project.model';

import { ProjectService } from 'src/app/core/services/project.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { TaskItemFormComponent } from '../task-list-project/components/task-item-form/task-item-form.component';


@Component({
  selector: 'can-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  public projects: Array<Project> = new Array<Project>();

  constructor(
    private _bottomSheet: MatBottomSheet,
    private _projectService: ProjectService,
  ) { }

  public ngOnInit(): void {
    this._loadTaskLists();
  }

  private _loadTaskLists(): void {
    this._projectService.getTaskListProjects().subscribe((res: Array<Project>) => {
      this.projects = res;
    });
  }

  public createProject(): void {
    const bottomSheet = this._bottomSheet.open(TaskItemFormComponent)
    bottomSheet.instance.isEdition = false;
    bottomSheet.afterDismissed().subscribe(() => {
      this._loadTaskLists();
    });
  }

  public handleOutputEvent(event: any): void {
    if (event === 'refresh') {
      this._loadTaskLists();
    }
  }

}
