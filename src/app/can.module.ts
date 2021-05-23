import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

import { CanComponent } from 'src/app/can.component';
import { CanRoutingModule } from 'src/app/can-routing.module';
import { KanbanComponent } from 'src/app/modules/pages/kanban/kanban.component';
import { ResumeComponent } from 'src/app/modules/pages/resume/resume.component';
import { TaskListComponent } from 'src/app/modules/pages/task-list/task-list.component';
import { SidenavComponent } from 'src/app/modules/components/sidenav/sidenav.component';
import { HeaderComponent } from './modules/components/header/header.component';
import { FooterComponent } from './modules/components/footer/footer.component';

@NgModule({
  declarations: [
    CanComponent,
    KanbanComponent,
    ResumeComponent,
    TaskListComponent,
    SidenavComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    CanRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [CanComponent]
})
export class CanModule { }
