import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatInputModule } from '@angular/material/input';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

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
import { AlertDialogComponent } from 'src/app/modules/components/alert-dialog/alert-dialog.component';
import { KanbanProjectComponent } from 'src/app/modules/pages/kanban-project/kanban-project.component';
import { GlobalSearchComponent } from 'src/app/modules/components/global-search/global-search.component';
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
    AlertDialogComponent,
    GlobalSearchComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    CanRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    DragDropModule,
    MatInputModule,
    ScrollingModule,
    MatDialogModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatBottomSheetModule,
    MatAutocompleteModule,
  ],
  providers: [],
  bootstrap: [CanComponent]
})
export class CanModule { }
