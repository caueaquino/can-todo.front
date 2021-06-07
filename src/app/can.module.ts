import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CanComponent } from 'src/app/can.component';
import { CanRoutingModule } from 'src/app/can-routing.module';
import { KanbanComponent } from 'src/app/modules/pages/kanban/kanban.component';
import { ResumeComponent } from 'src/app/modules/pages/resume/resume.component';
import { ProfileComponent } from 'src/app/modules/pages/profile/profile.component';
import { HeaderComponent } from 'src/app/modules/components/header/header.component';
import { FooterComponent } from 'src/app/modules/components/footer/footer.component';
import { SettingsComponent } from 'src/app/modules/pages/settings/settings.component';
import { TaskListComponent } from 'src/app/modules/pages/task-list/task-list.component';
import { SidenavComponent } from 'src/app/modules/components/sidenav/sidenav.component';
import { NavListComponent } from 'src/app/modules/components/sidenav/nav-list/nav-list.component';
import { KanbanProjectComponent } from 'src/app/modules/pages/kanban-project/kanban-project.component';
import { KanbanItemComponent } from 'src/app/modules/pages/kanban-project/kanban-item/kanban-item.component';
import { TaskListProjectComponent } from 'src/app/modules/pages/task-list-project/task-list-project.component';
import { TaskListItemComponent } from 'src/app/modules/pages/task-list-project/task-list-item/task-list-item.component';


@NgModule({
  declarations: [
    CanComponent,
    KanbanComponent,
    ResumeComponent,
    TaskListComponent,
    SidenavComponent,
    HeaderComponent,
    FooterComponent,
    NavListComponent,
    ProfileComponent,
    SettingsComponent,
    KanbanProjectComponent,
    TaskListProjectComponent,
    KanbanItemComponent,
    TaskListItemComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    CanRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    DragDropModule,
    ScrollingModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [CanComponent]
})
export class CanModule { }
