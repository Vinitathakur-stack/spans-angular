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
      return this.apiService.makeHttpRequest('api/login','post',data,true);

    }


}
