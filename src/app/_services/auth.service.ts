import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public apiService:ApiService) { }
 
		login(data:any):Observable<any>{
      console.log(data);
      return this.apiService.makeHttpRequest('login','post',data,true);

    }


  //   private getError(error: Response): Observable<any>{
  //     console.log(error);
  //     return Observable.throw(error.json() || 'Server Issue');
  // }

}
