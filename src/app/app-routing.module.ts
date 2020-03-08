import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KanbanBoardComponent } from './bug-tracker/kanban-board/kanban-board.component';
import { AuthComponent } from './authentication/auth/auth.component';
import { AuthGuard } from './authentication/auth-guard.guard';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './bug-tracker/projects/projects.component';


const routes: Routes = [
  { path: "home", component: HomeComponent},
  {path: "kanban", component: KanbanBoardComponent, canActivate: [AuthGuard]},
  {path: "projects", component: ProjectsComponent, canActivate: [AuthGuard]},
  {path: "login", component: AuthComponent},
  {path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
