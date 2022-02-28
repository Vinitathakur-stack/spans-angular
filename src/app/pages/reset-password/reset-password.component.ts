import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    overlayHidden: boolean = false;
  //  logoSrc: any = CONSTANTS.STUDY_SITE == 'ORCHID' ? 'assets/images/login_logo_orchid.png' : 'assets/images/login_logo.png';
  constructor(private router: Router,private formBuilder: FormBuilder,) { }

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
save(){

}

}
