import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { HelperService } from "./helper.service";
import { BehaviorSubject, Subject } from "rxjs";
@Injectable({
    providedIn: "root",
})
export class AuthService {
  
    constructor(public HelperService: HelperService) {}

    // check user is logged in or not //
    checkLogin(): Observable<any> {
        return this.HelperService.makeHttpRequest(
            "check-login",
            "post",
            true
        );
    }
    /**
     * @desc login user
     */
    login(data: any): Observable<any> {
       
        return this.HelperService.makeHttpRequest("login", "post", data);
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
        return this.HelperService.makeHttpRequest(
            "logout",
            "get",
            {},
            true
        );
    }
}
