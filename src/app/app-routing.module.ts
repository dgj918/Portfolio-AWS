import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BugTrackerComponent } from './bug-tracker/bug-tracker.component';
import { AuthComponent } from './authentication/auth/auth.component';
import { AuthGuard } from './authentication/auth-guard.guard';


const routes: Routes = [
  {path: "tracker", component: BugTrackerComponent, canActivate: [AuthGuard]},
  {path: "login", component: AuthComponent},
  {path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
