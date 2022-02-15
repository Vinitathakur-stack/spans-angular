import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONSTANTS } from '../config/constants';

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

		// if (type == 'post') {
		// 	httpRequest = this.http[type](url, data);
		// } else {
		// 	httpRequest = this.http[type](url);
		// }

    // return this.http.post(url, {
    //   username,
    //   password
    // }, httpOptions);
		// (data['showSpinner'] == undefined || (data['showSpinner'] && data['showSpinner'] != false)) &&
		// 	this.spinnerService.show();
		// return httpRequest.pipe(
		// 	map(res => {
		// 		let response = res;
		// 		(data['showSpinner'] == undefined || (data['showSpinner'] && data['showSpinner'] != false)) &&
		// 			this.spinnerService.hide();
		// 		return response;
		// 	}),
		// 	catchError(err => of([this.spinnerService.hide()]))
		// );
  }
}
