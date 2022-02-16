import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  saveToken(tokendata){
    localStorage.setItem("token", tokendata);

  }
  saveUser(data){
 
    localStorage.setItem("username", data.Id);
    localStorage.setItem("email", data.Name);
    localStorage.setItem("name", data.Email);
   
  }
}
