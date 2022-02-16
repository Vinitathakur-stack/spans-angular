import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  constructor(public apiService:ApiService) { }
 
		login(data:any):Observable<any>{
      console.log(data+"ppp");
      this.loggedIn.next(true);
      return this.apiService.makeHttpRequest('api/login','post',data,true);

    }


}
