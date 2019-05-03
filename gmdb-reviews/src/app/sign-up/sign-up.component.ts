import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location} from '@angular/common';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  formSignup: FormGroup;
  feedback: string = "";
  

  constructor (private fb: FormBuilder, private location: Location, private userService: UserService) { }

  ngOnInit() {
    this.formSignup = this.fb.group({
      email:['', [Validators.required, Validators.email]],
      password:['' , [Validators.required, Validators.minLength(6)]]
    })
  }

  signup() {
    if(this.formSignup.valid) {
      let {email, password} = this.formSignup.value;

      let success;
      this.userService.signUp(email,password).subscribe(a=>success=a); 
      console.log(success);
      success ? this.location.back() : this.feedback = "Email already in the system!"; 
    }
  }


}
