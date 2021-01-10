import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserloginComponent } from './components/user/userlogin/userlogin.component'
import { AdminSigninComponent } from './components/admin/admin-signin/admin-signin.component';
import { UserSignupComponent } from './components/user/user-signup/user-signup.component';
import { DashboardComponent } from './components/user/dashboard/dashboard.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  { path:  '', component:  UserloginComponent},
  { path:  'admin', component:  AdminSigninComponent},
  { path:  'user/signup', component:  UserSignupComponent},
  { path:  'user/dashboard', component:  DashboardComponent},
  { path:  'admin/dashboard', component:  AdminDashboardComponent},
  { path:  '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
