import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import {Location} from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: String = '';
  userName: String = '';
  feedback: String = "";
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, 
    private location: Location, 
    private activeRoute: ActivatedRoute, 
    private userService: UserService, 
    private router: Router) {}
  
  authenticate() {
    if (this.loginForm.valid) {
      let userName = this.loginForm.value.userName;
      let password = this.loginForm.value.password;
      let verification = false;
      // this.userService.login(email, password).subscribe(a => verification = a);
      this.userService.login(userName, password).subscribe(a => {
        if(a.email){
          // console.log(' user email '+a.email)
          this.userService.setEmail(a.email);
          this.userService.authenticated = true;
          // console.log(' user email '+this.userService.userEmail);
          // console.log(' auth '+this.userService.authenticated);
          this.router.navigate(['/']);
          verification = true;
        }
      });
      if (!verification) this.feedback = "User Name not found!"
    }
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: [this.userName, [Validators.required]],
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
