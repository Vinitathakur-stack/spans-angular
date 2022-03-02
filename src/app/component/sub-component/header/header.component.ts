import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { HelperService } from "../../../service/helper.service";
@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
    isLoggedIn = false;

    isLoggedIn$: Observable<boolean>;
    username?: string;
    constructor(private helperService: HelperService) {}

    ngOnInit(): void {
        this.isLoggedIn$ = this.helperService.isUserLoggedIn;
    }

    logout(): void {
        // this.tokenStorageService.signOut();
        window.location.reload();
    }
}
