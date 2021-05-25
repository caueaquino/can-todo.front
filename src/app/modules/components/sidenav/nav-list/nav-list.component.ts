import { Component, OnInit } from '@angular/core';

import { NavigationItem } from 'src/app/shared/models/navigation-item.model';


@Component({
  selector: 'can-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss']
})
export class NavListComponent implements OnInit {

  public navList: Array<NavigationItem> = new Array(
    new NavigationItem({ name: 'Resume', route: './todo/resume' }),
    new NavigationItem({ name: 'Task list', route: './todo/task-list' }),
    new NavigationItem({ name: 'Kanban', route: './todo/kanban' }),
  );

  constructor() { }

  public ngOnInit(): void {
  }

}
