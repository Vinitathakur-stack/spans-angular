import { Injectable } from "@angular/core";
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { HelperService } from "../service/helper.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private apiHelper: HelperService) {}

    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
        let obj = {
            "Content-Type": "application/x-www-form-urlencoded",
            // Site: CONSTANTS.STUDY_SITE,
            /// Authorization: 'Basic YXBwVXNlcjpTUEFOU0AyMDIy',
        };
        // this.apiHelper.isAuthenticated() && (obj['Token'] = this.apiHelper.getToken() || '');
        request = request.clone({
            setHeaders: obj,
        });
        console.log("requestInce", request);
        return next.handle(request);
    }
}
