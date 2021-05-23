import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResumeComponent } from 'src/app/modules/pages/resume/resume.component';
import { KanbanComponent } from 'src/app/modules/pages/kanban/kanban.component';
import { TaskListComponent } from 'src/app/modules/pages/task-list/task-list.component';


const routes: Routes = [

  {
    path: 'todo', children: [

      { path: '', redirectTo: 'resume', pathMatch: 'full' },
      { path: 'resume', component: ResumeComponent },
      { path: 'task-list', component: TaskListComponent },
      { path: 'kanban', component: KanbanComponent },

    ]
  },

  { path: '**', redirectTo: 'todo', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CanRoutingModule { }
