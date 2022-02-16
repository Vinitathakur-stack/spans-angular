import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { CONSTANTS } from '../config/constants';
import { HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry,map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  isLoggedIn:boolean = false;
  
  constructor(private http: HttpClient,) { }
  	/**
	 * @desc Common function to call GET/POST with/without parameters
	 * @param url
	 * @param type
	 * @param data
	 * @param isLoggedIn
	 */
	makeHttpRequest(url='', type = 'get', data = {}, isLoggedIn = false) {
		let httpRequest: any;
		this.isLoggedIn=isLoggedIn;
		url = CONSTANTS.API_ENDPOINT + url;

		const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'GET')
      .append('Access-Control-Allow-Origin', '*');

		if (type == 'post') {
			httpRequest = this.http.post(url, data,{headers});
		} else {
			httpRequest = this.http.get(url);
		}
console.log(httpRequest);

		return httpRequest.pipe(
			map(res => {
				let response = res;
				
				return response;
			}),
			catchError(err => {
			let error = err;
			console.log(error.status +"error");
			if (error.status === 0) {
				// A client-side or network error occurred. Handle it accordingly.
				console.error('An error occurred:', error.error);
			  } else {
				// The backend returned an unsuccessful response code.
				// The response body may contain clues as to what went wrong.
				console.error(
				  `Backend returned code ${error.status}, body was: `, error.error);
			  }
			  // Return an observable with a user-facing error message.
			  return throwError(() => new Error('Something bad happened; please try again later.'));
			})

		
		);
	}
		
}



