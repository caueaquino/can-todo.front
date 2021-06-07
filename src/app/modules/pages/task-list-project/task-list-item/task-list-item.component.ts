import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'can-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.scss']
})
export class TaskListItemComponent implements OnInit {

  @Input() public task: any;

  constructor() { }

  public ngOnInit(): void {
  }

}
