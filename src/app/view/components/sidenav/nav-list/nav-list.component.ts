import { Component, OnInit } from '@angular/core';

import { ENavigationItem } from 'src/app/shared/enums/navigation-item.enum';
import { NavigationItem } from 'src/app/shared/models/navigation-item.model';


@Component({
  selector: 'can-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss']
})
export class NavListComponent implements OnInit {

  public navList: Array<NavigationItem> = new Array(
    // new NavigationItem({ id: ENavigationItem.RESUME, name: 'Resume', route: '/todo/resume' }),
    new NavigationItem({ id: ENavigationItem.TASK_LIST, name: 'Task list', route: '/todo/task-list' }),
    // new NavigationItem({ id: ENavigationItem.KANBAN, name: 'Kanban', route: '/todo/kanban' }),
  );

  constructor() { }

  public ngOnInit(): void {
  }

}
