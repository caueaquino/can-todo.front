import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatInputModule } from '@angular/material/input';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


import { NgxMaskModule } from 'ngx-mask';


import { CanRoutingModule } from 'src/app/can-routing.module';

import { TokenInterceptor } from 'src/app/core/interceptors/token.interceptor';
import { ErrorInterceptor } from 'src/app/core/interceptors/error.interceptor';
import { LoadingInterceptor } from 'src/app/core/interceptors/loading.interceptor';

import { CanComponent } from 'src/app/can.component';
import { KanbanComponent } from 'src/app/view/pages/kanban/kanban.component';
import { ResumeComponent } from 'src/app/view/pages/resume/resume.component';
import { SignInComponent } from 'src/app/view/pages/sign-in/sign-in.component';
import { SignUpComponent } from 'src/app/view/pages/sign-up/sign-up.component';
import { ProfileComponent } from 'src/app/view/pages/profile/profile.component';
import { HeaderComponent } from 'src/app/view/components/header/header.component';
import { FooterComponent } from 'src/app/view/components/footer/footer.component';
import { SettingsComponent } from 'src/app/view/pages/settings/settings.component';
import { TaskListComponent } from 'src/app/view/pages/task-list/task-list.component';
import { LoadingComponent } from 'src/app/view/components/loading/loading.component';
import { SidenavComponent } from 'src/app/view/components/sidenav/sidenav.component';
import { AuthLayoutComponent } from 'src/app/view/layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from 'src/app/view/layouts/main-layout/main-layout.component';
import { NavListComponent } from 'src/app/view/components/sidenav/nav-list/nav-list.component';
import { AlertDialogComponent } from 'src/app/view/components/alert-dialog/alert-dialog.component';
import { KanbanProjectComponent } from 'src/app/view/pages/kanban-project/kanban-project.component';
import { GlobalSearchComponent } from 'src/app/view/components/global-search/global-search.component';
import { KanbanItemComponent } from 'src/app/view/pages/kanban-project/kanban-item/kanban-item.component';
import { TaskListProjectComponent } from 'src/app/view/pages/task-list-project/task-list-project.component';
import { TaskListItemComponent } from 'src/app/view/pages/task-list-project/components/task-list-item/task-list-item.component';
import { TaskItemFormComponent } from 'src/app/view/pages/task-list-project/components/task-item-form/task-item-form.component';
import { TaskListFormComponent } from 'src/app/view/pages/task-list-project/components/task-list-form/task-list-form.component';


@NgModule({
  declarations: [
    CanComponent,
    KanbanComponent,
    SignInComponent,
    SignUpComponent,
    ResumeComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    NavListComponent,
    ProfileComponent,
    LoadingComponent,
    TaskListComponent,
    SettingsComponent,
    KanbanItemComponent,
    AuthLayoutComponent,
    MainLayoutComponent,
    AlertDialogComponent,
    TaskListItemComponent,
    TaskItemFormComponent,
    GlobalSearchComponent,
    TaskListFormComponent,
    KanbanProjectComponent,
    TaskListProjectComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    DragDropModule,
    MatInputModule,
    ScrollingModule,
    MatDialogModule,
    MatButtonModule,
    HttpClientModule,
    CanRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatBottomSheetModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true, },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true, },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true, },
  ],
  bootstrap: [CanComponent]
})
export class CanModule { }
