import { Component, OnInit } from '@angular/core';

import { ProjectService } from 'src/app/core/services/project.service';


@Component({
  selector: 'can-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  constructor(
    private _projectService: ProjectService,
    ) { }

  public ngOnInit(): void {
    this.loadTaskLists();
  }

  private loadTaskLists(): void {
    this._projectService.getTaskListProjects().subscribe((res) => {
      console.log(res);
    });
  }

}
