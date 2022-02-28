import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../_services/auth.service';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  form: FormGroup;
	is_unique_email: Boolean = false;
	is_unique_email_msg = '';
	is_success = false;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
			{
				email: new FormControl('', {
					validators: [
						Validators.required,
						Validators.pattern(
							/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
						),
					],
				}),
			},
			{
				updateOn: 'blur'
			}
		);
  }

  forgotPassword() {
		this.is_unique_email_msg = '';
		if (this.form.valid) {
			// this.authService.forgot_password(this.form.value).subscribe(
			// 	result => {
			// 		const response = result;
			// 		this.is_success = response['status'] !== 'error'
			// 		this.is_unique_email_msg = !this.is_success ? 'This Email address does not exist in system..' : '';
			// 	},
			// 	err => {
			// 		console.log(err);
			// 	}
			// );
		}
	}
  

}
