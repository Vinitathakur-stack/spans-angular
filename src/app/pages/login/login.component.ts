import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { TokenStorageService } from '../../_services/token-storage.service';
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  fieldTextType: boolean=false;
  form: any = {
    username: null,
    password: null,
    membership:null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  membershipList: any = ['Family', 'Navigator', 'XYZ']
  
  constructor(	private router: Router,private authService:AuthService, private tokenStorage:TokenStorageService,public toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, password,membership } = this.form;
    console.log(this.form);
    this.form.email = 'Vinita5@gmail.com';
    this.form.password = '1234566666';
    
    // this.authService.login(this.form).subscribe(response => {
    
    //   // if (response["message"] == "success") {

    //   //   console.log(response["data"]);
    //   //   this.tokenStorage.saveToken(response['data']['Token']);
    //   //   this.tokenStorage.saveUser(response["data"]);
      
    //   //   let path = "/home";
		// 	// 			this.router.navigate([path]).then(() => {
		// 	// 				this.toastr.success(response['message']);
		// 	// 			});

    //   // }else {
    //   //   this.toastr.error(response['message']);
    //   // }
    //   let path = "/home";
    //   this.router.navigate([path]).then(() => {
    //     this.toastr.success('successfully logged');
    //   });
    // });
    let path = "/home";
    this.router.navigate([path]).then(() => {
      this.toastr.success('successfully logged');
    });
  }
    // this.authService.login(username, password).subscribe({
    //   next: data => {
    //     this.tokenStorage.saveToken(data.accessToken);
    //     this.tokenStorage.saveUser(data);

    //     this.isLoginFailed = false;
    //     this.isLoggedIn = true;
    //     this.roles = this.tokenStorage.getUser().roles;
    //     this.reloadPage();
    //   },
    //   error: err => {
    //     this.errorMessage = err.error.message;
    //     this.isLoginFailed = true;
    //   }
    // });
  
  // <!-- Switching method -->
toggleFieldTextType() {
  this.fieldTextType = !this.fieldTextType;
}

  reloadPage(): void {
    window.location.reload();
  }
  changemembership() {
    console.log();
  }
}
