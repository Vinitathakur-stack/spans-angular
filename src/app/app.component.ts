import { Component, OnInit } from '@angular/core';
import { AuthService } from "src/app/service/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'span-app';
  constructor(
  private authService:AuthService
) {}
  ngOnInit() {
    this.checkLogin();
  }

  checkLogin() {
       console.log("r");
       
    // this.authService.checkLogin().subscribe((response) => {
    //     console.log(response);
    // });
}
}
