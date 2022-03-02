import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./component/login/login.component";
import { RegisterComponent } from "./component/register/register.component";
import { ProfileComponent } from "./component/profile/profile.component";
import { HomeComponent } from "./component/home/home.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { ChatComponent } from "./component/chat/chat.component";
import { ResetPasswordComponent } from "./component/reset-password/reset-password.component";
import { ForgotPasswordComponent } from "./component/forgot-password/forgot-password.component";
import { HeaderComponent } from "./component/sub-component/header/header.component";
import { FooterComponent } from "./component/sub-component/footer/footer.component";
import { TokenInterceptor } from "./interceptor/token.interceptor";
import { AuthGuard } from "./guard/auth.guard";

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        ProfileComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        ChatComponent,
        ResetPasswordComponent,
        ForgotPasswordComponent,
    ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        HttpClientModule,
        
    ],
    providers: [
        AuthGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
