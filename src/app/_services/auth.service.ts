import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { BehaviorSubject , Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  private currentUser = new BehaviorSubject<any>(null);
  userInfo:any='';
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  constructor(public apiService:ApiService) { }
 
		login(data:any):Observable<any>{
      console.log(data+"ppp");
      this.loggedIn.next(true);
      this.currentUser.next(this.userInfo.user); // <-- pump the value in here
      return this.apiService.makeHttpRequest('api/login','post',data,true);

    }


}
