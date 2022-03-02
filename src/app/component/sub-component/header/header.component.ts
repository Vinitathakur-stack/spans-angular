import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "src/app/service/auth.service";
@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
    isLoggedIn = false;

    isLoggedIn$: Observable<boolean>;
    username?: string;
    constructor(private authService: AuthService) {}

    ngOnInit(): void {
        this.isLoggedIn$ = this.authService.isLoggedIn;
    }

    logout(): void {
        // this.tokenStorageService.signOut();
        window.location.reload();
    }
}
