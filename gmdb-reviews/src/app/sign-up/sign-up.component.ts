import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  formSignup:FormGroup;
  

  constructor(private fb: FormBuilder, private router:Router,private userService:UserService) { }

  ngOnInit() {
    this.formSignup = this.fb.group({
      email:['' ,[Validators.required,Validators.email]],
      password:['' ,[Validators.required,Validators.minLength(6)]]
    })
  }

  signup(){
    if(this.formSignup.valid){
      
      let {email,password} = this.formSignup.value;
      this.userService.signUp(email,password);   //subscribing
     
       this.router.navigate(['']);
   
      
    }


  }
}
