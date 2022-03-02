import { Component, OnInit } from "@angular/core";
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { AuthService } from "src/app/service/auth.service";
@Component({
    selector: "app-forgot-password",
    templateUrl: "./forgot-password.component.html",
    styleUrls: ["./forgot-password.component.css"],
})
export class ForgotPasswordComponent implements OnInit {
    forgotPasswordForm: FormGroup;
    is_unique_email: Boolean = false;
    is_unique_email_msg = "";
    is_success = false;
    data: any;
    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private toaster: ToastrService
    ) {}

    ngOnInit(): void {
        this.forgotPasswordForm = this.formBuilder.group(
            {
                email: new FormControl("", {
                    validators: [
                        Validators.required,
                        Validators.pattern(
                            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        ),
                    ],
                }),
            },
            {
                updateOn: "blur",
            }
        );
    }

    forgotPassword() {
        if (this.forgotPasswordForm.valid) {
            this.authService
                .forgot_password(this.forgotPasswordForm.value)
                .subscribe(
                    (result) => {
                        this.data = result;
                        result.status == "error"
                            ? this.toaster.error(result.msg)
                            : this.toaster.success(result.msg);
                        if (this.data.status != "error") {
                            this.router.navigate(["/"]);
                        }
                    },
                    (err) => {
                        this.toaster.error(err);
                    }
                );
        } else {
            // this.validateAllFormFields(this.forgotPasswordForm);
        }
    }
}
