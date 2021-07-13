import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResumeComponent } from 'src/app/modules/pages/resume/resume.component';
import { KanbanComponent } from 'src/app/modules/pages/kanban/kanban.component';
import { ProfileComponent } from 'src/app/modules/pages/profile/profile.component';
import { SettingsComponent } from 'src/app/modules/pages/settings/settings.component';
import { TaskListComponent } from 'src/app/modules/pages/task-list/task-list.component';
import { KanbanProjectComponent } from 'src/app/modules/pages/kanban-project/kanban-project.component';
import { TaskListProjectComponent } from 'src/app/modules/pages/task-list-project/task-list-project.component';


const routes: Routes = [

  {
    path: 'todo', children: [

      { path: '', redirectTo: 'resume', pathMatch: 'full' },
      { path: 'resume', component: ResumeComponent },

      { path: 'profile', component: ProfileComponent },
      { path: 'settings', component: SettingsComponent },

      { path: 'task-list', component: TaskListComponent },
      { path: 'task-list/:id', component: TaskListProjectComponent },
      { path: 'task-list/:id/edit-project', component: TaskListProjectComponent },
      { path: 'task-list/:id/edit-task/:id', component: TaskListProjectComponent },
      { path: 'task-list/:id/create-task', component: TaskListProjectComponent },

      { path: 'kanban', component: KanbanComponent },
      { path: 'kanban/:id', component: KanbanProjectComponent },

    ]
  },

  { path: '**', redirectTo: 'todo', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CanRoutingModule { }
