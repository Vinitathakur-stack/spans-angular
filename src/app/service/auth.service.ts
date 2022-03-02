import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { HelperService } from "./helper.service";
import { BehaviorSubject, Subject } from "rxjs";
@Injectable({
    providedIn: "root",
})
export class AuthService {
    private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
        false
    );
    private currentUser = new BehaviorSubject<any>(null);
    userInfo: any = "";
    get isLoggedIn() {
        return this.loggedIn;
    }
    constructor(public HelperService: HelperService) {}

    isAuthenticated(){
        const token = localStorage.getItem('token');
        // Check whether the user is logged In or not
        // true or false
        if(this.loggedIn.getValue() == true){
            return true;
        }
        return false;
    }
    /**
     * @desc login user
     */
    login(data: any): Observable<any> {
        console.log("data", data);
        this.loggedIn.next(true);
        this.currentUser.next(this.userInfo.user); // <-- pump the value in here
        return this.HelperService.makeHttpRequest("login", "post", data, true);
    }
    /**
     * @desc create user password
     */
    change_password(data): Observable<any> {
        return this.HelperService.makeHttpRequest(
            "reset-password",
            "post",
            data
        );
    }

    /**
     * @desc forgot password
     */
    forgot_password(data) {
        return this.HelperService.makeHttpRequest(
            "forgot-password",
            "post",
            data
        );
    }
    // logout researcher and participant//
      logout(): Observable<any> {
        this.loggedIn.next(false);
        return this.HelperService.makeHttpRequest(
            "logout",
            "get",
            {},
            true
        );
    }
}
