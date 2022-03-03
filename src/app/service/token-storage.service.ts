import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  saveToken(tokendata){
    localStorage.setItem("token", tokendata);
  }
  
  saveUser(userDetails,userType){
    localStorage.setItem("userType",userType);
    localStorage.setItem("username", userDetails.username);
    localStorage.setItem("email",  userDetails.email);
    localStorage.setItem("m_number", userDetails.phone_number);
  }
}
