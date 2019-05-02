import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import {Location} from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: String = '';
  feedback: String = "";

  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private location: Location, private activeRoute: ActivatedRoute, private userService: UserService) {
  }
  authenticate() {
    if (this.loginForm.valid) {
      let email = this.loginForm.value.email;
      let password = this.loginForm.value.password;
      let verification;
      this.userService.login(email, password).subscribe(a => verification = a);

      if (!verification) this.feedback = "Email not found!"
      else this.location.back();
    }
  }

  ngOnInit() {

    this.loginForm = this.fb.group({
      email: [this.email, [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
    this.activeRoute.params.subscribe(({ email }) => {

      if (!email) return;
      else {

        this.email = email;
        console.log("thank you for signing up", email);
      }

      location.reload();
    });
  }

}
