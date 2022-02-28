import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './pages/register/register.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [ 
{ path: 'home', component: HomeComponent },
{ path: '', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'reset-password', component: ResetPasswordComponent },
{ path: 'profile', component: ProfileComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
