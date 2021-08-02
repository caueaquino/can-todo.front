import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


import { TaskList } from 'src/app/shared/models/task-list.model';
import { TaskListItem } from 'src/app/shared/models/task-list-item.model';

import { TaskListService } from 'src/app/core/services/task-list.service';
import { ITaskListItem } from 'src/app/shared/interfaces/task-list-item.interface';

import { TaskListFormComponent } from 'src/app/view/pages/task-list-project/components/task-list-form/task-list-form.component';
import { TaskItemFormComponent } from 'src/app/view/pages/task-list-project/components/task-item-form/task-item-form.component';


@Component({
  selector: 'can-task-list-project',
  templateUrl: './task-list-project.component.html',
  styleUrls: ['./task-list-project.component.scss']
})
export class TaskListProjectComponent implements OnInit {

  public taskListId: number = 0;
  public taskList: any;

  constructor(
    private _router: Router,
    private _bottomSheet: MatBottomSheet,
    private _activatedRoute: ActivatedRoute,
    private _taskListService: TaskListService,
  ) {
    this.getTaskListIdFromRoute();
  }

  public ngOnInit(): void {
    this._loadTaskList();
  }

  private getTaskListIdFromRoute(): void {
    this.taskListId = this._activatedRoute.snapshot.params.id;
  }

  private _loadTaskList(): void {
    this._taskListService.getTaskListById(this.taskListId).subscribe((taskList: TaskList) => {
      this.taskList = new TaskList(taskList);
      this._taskListService.getTasksByTaskListId(this.taskListId).subscribe((taskItemList: Array<ITaskListItem>) => {
        this.taskList.tasks = taskItemList;
      });
    });
  }

  public drop(event: CdkDragDrop<TaskListItem[]>) {
    moveItemInArray(this.taskList.tasks, event.previousIndex, event.currentIndex);
  }

  public editTaskList(): void {
    this._bottomSheet.open(TaskListFormComponent).afterDismissed().subscribe(() => {
      this._loadTaskList();
    });
  }

  public createTask(): void {
    const bottomSheet = this._bottomSheet.open(TaskItemFormComponent)
    bottomSheet.instance.F_projectId.setValue(Number(this.taskListId));
    bottomSheet.instance.isEdition = false;
    bottomSheet.afterDismissed().subscribe(() => {
      this._loadTaskList();
    });
  }

  public handleOutputEvent(event: any): void {
    if (event === 'refresh') {
      this._loadTaskList();
    }
  }

}
