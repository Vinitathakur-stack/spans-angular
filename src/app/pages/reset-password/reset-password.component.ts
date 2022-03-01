import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../../_services/auth.service';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;
    code: any;
    type_password: any;
    heading: String = '';
    is_success = false;
    passType: any = 'password';
    is_password_valid: any = {
        is_length: false,
        is_space: false,
        is_capital: false,
        is_small: false,
        is_symbol: false,
        is_not_symbol: false,
        is_number: false,
    };
    allowed_symbol = "$@!%*?&";
  constructor(		
    private route: ActivatedRoute,
		private router: Router,
    private formBuilder: FormBuilder,
    private authService:AuthService,
    public toastr: ToastrService
    ) {
    this.route.params.subscribe(params => this.code = params.code);
    console.log(this.code);
   }

  ngOnInit(): void {
    this.resetPasswordForm = this.formBuilder.group(
      {
          password: ['', [Validators.required,
              // Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/)
          ]],
          confirm_password: ['', Validators.required]
      },
      {
          validator: this.match_password,
      }
  );
  }
  match_password(g: FormGroup) {
    return g.get('password').value === g.get('confirm_password').value ? null : { match_password: true };
}

  checkPassword(data) {
    let password = data.value;
    this.is_password_valid = {
        is_length: !(password.length < 8),
        is_space: !/\s/g.test(password),
        is_capital: /[A-Z]/g.test(password),
        is_small: /[a-z]/g.test(password),
        is_symbol: (/[$@!%*?&]/g.test(password)),
        is_not_symbol: (/[\\" "#'()+,-./:;<=>[\]^_`{|}~]/g.test(password)),
        is_number: /\d/g.test(password),
    };
    if (this.is_password_valid.is_not_symbol) {
        this.is_password_valid.is_symbol = !1;
    }
}

login() {
    this.router.navigate(["/home"]);
}

showPassword(evt) {
    this.passType = evt.target.checked ? 'text' : 'password';
}
save() {
  if (this.resetPasswordForm.valid && this.check_password_validaty()) {
      let input = JSON.parse(JSON.stringify(this.resetPasswordForm.value));
      input.code = this.code;
      input.password = encodeURIComponent(this.resetPasswordForm.value['password']);
      input.confirm_password = encodeURIComponent(this.resetPasswordForm.value['confirm_password']);
      this.authService.change_password(input).subscribe(
          result => {
              result.status == 'error'? this.toastr.error(result.msg, result.status) : this.toastr.success(result.msg, result.status);
              if (result.status === 'success') {
              
                 // this.router.navigate(["/home"]);
              }
          },
          err => {
              console.log(err);
          }
      );
  } else {
      // this.validateAllFormFields(this.form);
  }
}
check_password_validaty() {
  let p = this.is_password_valid;

  if (p.is_not_symbol) {
      let error = 'Allowed special characters are ' + this.allowed_symbol + ' only.'
      this.toastr.error(error, 'error');
      this.is_password_valid.is_symbol = !1;
  }

  return (p.is_length && p.is_space && p.is_capital && p.is_small && p.is_symbol && p.is_number && !p.is_not_symbol);
}

}
