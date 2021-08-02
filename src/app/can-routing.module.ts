import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ResumeComponent } from 'src/app/view/pages/resume/resume.component';
import { KanbanComponent } from 'src/app/view/pages/kanban/kanban.component';
import { SignInComponent } from 'src/app/view/pages/sign-in/sign-in.component';
import { SignUpComponent } from 'src/app/view/pages/sign-up/sign-up.component';
import { ProfileComponent } from 'src/app/view/pages/profile/profile.component';
import { SettingsComponent } from 'src/app/view/pages/settings/settings.component';
import { TaskListComponent } from 'src/app/view/pages/task-list/task-list.component';
import { AuthLayoutComponent } from 'src/app/view/layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from 'src/app/view/layouts/main-layout/main-layout.component';
import { KanbanProjectComponent } from 'src/app/view/pages/kanban-project/kanban-project.component';
import { TaskListProjectComponent } from 'src/app/view/pages/task-list-project/task-list-project.component';


const routes: Routes = [
  {
    path: 'auth', component: AuthLayoutComponent, canActivate: [], children: [
      { path: 'sign-in', component: SignInComponent },
      { path: 'sign-up', component: SignUpComponent },
    ]
  },
  {
    path: '', component: MainLayoutComponent, canActivate: [], children: [
      { path: '', redirectTo: 'todo', pathMatch: 'full' },
      {
        path: 'todo', children: [

          { path: '', redirectTo: 'resume', pathMatch: 'full' },
          { path: 'resume', component: ResumeComponent },

          { path: 'profile', component: ProfileComponent },
          { path: 'settings', component: SettingsComponent },

          { path: 'task-list', component: TaskListComponent },
          { path: 'task-list/:id', component: TaskListProjectComponent },

          { path: 'kanban', component: KanbanComponent },
          { path: 'kanban/:id', component: KanbanProjectComponent },

        ]
      }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CanRoutingModule { }
