import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RegisterComponent } from "./component/register/register.component";
import { ForgotPasswordComponent } from "./component/forgot-password/forgot-password.component";
import { ResetPasswordComponent } from "./component/reset-password/reset-password.component";
import { LoginComponent } from "./component/login/login.component";
import { HomeComponent } from "./component/home/home.component";

import { ProfileComponent } from "./component/profile/profile.component";
import { AuthGuard } from "./guard/auth.guard";
const routes: Routes = [
    { path: "home", component: HomeComponent,canActivate :[AuthGuard] },
    { path: "", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "reset-password/:code", component: ResetPasswordComponent },
    { path: "profile", component: ProfileComponent },
    { path: "forgot-password", component: ForgotPasswordComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
