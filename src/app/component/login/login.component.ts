import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

import {
    FormBuilder,
    FormGroup,
    Validators,
    FormControl,
} from "@angular/forms";
import { AuthService } from "src/app/service/auth.service";
import { TokenStorageService } from "src/app/service/token-storage.service";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
    fieldTextType: boolean = false;
    loginform: FormGroup;
    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = "";
    roles: string[] = [];
    membershipList: any = ["Family", "Navigator", "XYZ"];

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private tokenStorage: TokenStorageService,
        public toastr: ToastrService
    ) {}

    ngOnInit(): void {
        this.loginform = this.formBuilder.group({
            email: [
                "",
                [
                    Validators.pattern(
                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    ),
                    Validators.required,
                ],
            ],
            password: [
                "",
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.pattern(
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/
                    ),
                ],
            ],
        });
    }

    loginUser(): void {
        if (this.loginform.valid) {
            let input = JSON.parse(JSON.stringify(this.loginform.value));
            this.authService.login(input).subscribe((response) => {
                if (response["status"] == "success") {
                    console.log(response["data"]);
                    this.tokenStorage.saveToken(response["token"]);
                    this.tokenStorage.saveUser(response["userDetails"]);
                 
                    let path = "/home";
                    this.router.navigate([path]).then(() => {
                        this.toastr.success(response["msg"]);
                    });
                } else {
                    this.toastr.error(response["msg"]);
                }
                // let path = "/home";
                // this.router.navigate([path]).then(() => {
                //   this.toastr.success('successfully logged');
                // });
            });
            // let path = "/home";
            // this.router.navigate([path]).then(() => {
            //   this.toastr.success('successfully logged');
            // });
        } else {
            Object.keys(this.loginform.controls).forEach((field) => {
                const control = this.loginform.get(field);
                if (control instanceof FormControl) {
                    control.markAsTouched({ onlySelf: true });
                }
            });
        }
    }

    // <!-- Switching method -->
    toggleFieldTextType() {
        this.fieldTextType = !this.fieldTextType;
    }

    reloadPage(): void {
        window.location.reload();
    }
    changemembership() {
        console.log();
    }
}
