import { Component, OnInit } from '@angular/core';
import { AuthService } from "src/app/service/auth.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isLoggedIn: boolean = false;
  currentUser:any;
  disableForm=true;
  constructor(
    private authService: AuthService,
    private route: Router,
    private toaster: ToastrService
  ) { }

  ngOnInit(): void {
  }
save(){

}
edit(){
  this.disableForm = false;
}
logout(): void {
  localStorage.clear();
  this.isLoggedIn = false;
  // this.authService.logout().subscribe((response) => {
  //       if (response.status == "success") {
  //         localStorage.clear();
  //         this.isLoggedIn = false;
  //         this.route.navigate(["/"]).then(() => {
  //             this.toaster.success(response.msg, "success");
  //         });
  //     } else {
  //         this.toaster.error(
  //             "Something is wrong. Please try again.",
  //             "error"
  //         );
  //     }
      
  //     });

}

}
