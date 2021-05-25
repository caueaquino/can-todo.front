import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CanComponent } from 'src/app/can.component';
import { CanRoutingModule } from 'src/app/can-routing.module';
import { KanbanComponent } from 'src/app/modules/pages/kanban/kanban.component';
import { ResumeComponent } from 'src/app/modules/pages/resume/resume.component';
import { HeaderComponent } from 'src/app/modules/components/header/header.component';
import { FooterComponent } from 'src/app/modules/components/footer/footer.component';
import { TaskListComponent } from 'src/app/modules/pages/task-list/task-list.component';
import { SidenavComponent } from 'src/app/modules/components/sidenav/sidenav.component';
import { NavListComponent } from 'src/app/modules/components/sidenav/nav-list/nav-list.component';


@NgModule({
  declarations: [
    CanComponent,
    KanbanComponent,
    ResumeComponent,
    TaskListComponent,
    SidenavComponent,
    HeaderComponent,
    FooterComponent,
    NavListComponent
  ],
  imports: [
    BrowserModule,
    CanRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [CanComponent]
})
export class CanModule { }
