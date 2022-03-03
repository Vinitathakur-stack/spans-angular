import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { HelperService } from "../../../service/helper.service";
import { AuthService } from "../../../service/auth.service";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
    isLoggedIn = false;

    isLoggedIn$: Observable<boolean>;

    username?: string;
    constructor(private helperService: HelperService,  private authService:AuthService) {
    }

    ngOnInit(): void {
        this.checkLogin();
    }

    checkLogin(){
    //   this.isLoggedIn = true;
       this.authService.checkLogin().subscribe((response) => {
        console.log(response);
    });
    }
  
    // logout(): void {
    //     // this.tokenStorageService.signOut();
    //     window.location.reload();
    // }
}
