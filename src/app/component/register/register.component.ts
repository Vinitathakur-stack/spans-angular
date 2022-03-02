import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Component({
    selector: "app-register",
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
    form: any = {
        username: null,
        email: null,
        password: null,
    };
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = "";

    constructor(private toastr: ToastrService) {}

    ngOnInit(): void {}
    onSubmit(): void {
        const { username, email, password } = this.form;
        this.toastr.success("message", "title");
        console.log("submit");

        // this.authService.register(username, email, password).subscribe({
        //   next: data => {
        //     console.log(data);
        //     this.isSuccessful = true;
        //     this.isSignUpFailed = false;
        //   },
        //   error: err => {
        //     this.errorMessage = err.error.message;
        //     this.isSignUpFailed = true;
        //   }
        // });
    }
}
