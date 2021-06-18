import { Component, Input, OnInit } from '@angular/core';

import { TaskListService } from 'src/app/core/services/task-list.service';


@Component({
  selector: 'can-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.scss']
})
export class TaskListItemComponent implements OnInit {

  @Input() public taskList: any;
  @Input() public task: any;

  constructor(
    private _taskListService: TaskListService,
  ) { }

  public ngOnInit(): void {
  }

  public createTask(): void {

  }

  public updateTask(): void {''

  }

  public deleteTask(id: number): void {
    this._taskListService.deleteTaskById(this.taskList.id, id).subscribe((res: any) => {

    });
  }

}
