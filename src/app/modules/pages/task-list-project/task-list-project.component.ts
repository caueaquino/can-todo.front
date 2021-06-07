import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { TaskList } from 'src/app/shared/models/task-list.model';
import { TaskListItem } from 'src/app/shared/models/task-list-item.model';
import { TaskListService } from 'src/app/core/services/task-list.service';


@Component({
  selector: 'can-task-list-project',
  templateUrl: './task-list-project.component.html',
  styleUrls: ['./task-list-project.component.scss']
})
export class TaskListProjectComponent implements OnInit {

  public taskList: any;

  constructor(
    private taskListService: TaskListService,
  ) { }

  public ngOnInit(): void {
    this.loadTaskList();
  }

  public loadTaskList(): void {
    this.taskListService.getTaskListById(1).subscribe((taskList: TaskList) => {
      this.taskList = new TaskList(taskList);
    });
  }

  public drop(event: CdkDragDrop<TaskListItem[]>) {
    moveItemInArray(this.taskList.tasks, event.previousIndex, event.currentIndex);
  }

}
