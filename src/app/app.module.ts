import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { UserloginComponent } from './components/user/userlogin/userlogin.component';
import { UserSignupComponent } from './components/user/user-signup/user-signup.component';
import { AdminSigninComponent } from './components/admin/admin-signin/admin-signin.component';

import { UserServiceService } from './services/user-service.service';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component'
@NgModule({
  declarations: [
    AppComponent,
    UserloginComponent,
    UserSignupComponent,
    AdminSigninComponent,
    AdminDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
