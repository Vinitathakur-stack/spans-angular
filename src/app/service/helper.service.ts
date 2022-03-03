import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { CONSTANTS } from "../config/constants";
import { HttpHeaders } from "@angular/common/http";
import { Observable, throwError,BehaviorSubject } from "rxjs";
import { catchError, retry, map } from "rxjs/operators";

@Injectable({
    providedIn: "root",
})
export class HelperService {
    isLoggedIn: boolean = false;
  
    constructor(private http: HttpClient) {}

    /**
    * Get token and send it to interceptor
    */
    getToken() {
        return localStorage.getItem('token');
    }


    /**
     * Check if the API is required for Token
     */
    public isAuthenticated(): boolean {
        return this.isLoggedIn;
    }
  
    /**
     * @desc Common function to call GET/POST with/without parameters
     * @param url
     * @param type
     * @param data
     * @param isLoggedIn
     */
    makeHttpRequest(url, type = "get", data = {}, isLoggedIn = false) {
        let methodname = url;
        let httpRequest: any;
        this.isLoggedIn = isLoggedIn;
        url = CONSTANTS.API_ENDPOINT + url;
        if (type == "post") {
            httpRequest = this.http[type](url, data);
        } else {
            httpRequest = this.http[type](url);
        }
        // (data['showSpinner'] == undefined || (data['showSpinner'] && data['showSpinner'] != false)) &&
        //     //this.loading.present();
        return httpRequest.pipe(
            map((res) => {
                let response = res;
                // if(methodname == 'login' && response['status'] == 'success'){
                //     this.loggedIn.next(true);
                // }
                // if(methodname == 'logout' && response['status'] == 'success'){
                //     this.loggedIn.next(false);
                // }
                // (data['showSpinner'] == undefined || (data['showSpinner'] && data['showSpinner'] != false)) &&
                //     /this.loading.dismiss();
                return response;
            }),
            catchError((err) => {
                let error = err;
                console.log(error.status + "error");
                if (error.status === 0) {
                    // A client-side or network error occurred. Handle it accordingly.
                    console.error("An error occurred:", error.error);
                } else {
                    // The backend returned an unsuccessful response code.
                    // The response body may contain clues as to what went wrong.
                    console.error(
                        `Backend returned code ${error.status}, body was: `,
                        error.error
                    );
                }
                // Return an observable with a user-facing error message.
                return throwError(
                    () =>
                        new Error(
                            "Something bad happened; please try again later."
                        )
                );
            })
        );
    }
}
