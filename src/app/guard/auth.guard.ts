import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { HelperService } from '../service/helper.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public api: HelperService, public router: Router) {}

  canActivate() {
   // console.log(this.api.isAuthenticated.getValue(),"router");
 
      // if(!this.api.isAuthenticated()) {
      //   this.router.navigate(['']);
      //   return false;
      // }
      return true;
  }
  
}
