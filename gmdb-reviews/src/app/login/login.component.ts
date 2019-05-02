import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginFormComponent implements OnInit {
  email: String='';
  feedback: String="";

  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private router:Router, private activeRoute :ActivatedRoute) {
  }
  authenticate(){
    if(this.loginForm.valid){
      let email = this.loginForm.value.email;
      let user = localStorage.getItem(email);
      if(!user){
        this.feedback = "Email not found!"
      }else{
        let userdata = JSON.parse(user);
        
        this.router.navigateByUrl('/'+userdata.name);
        
      }
    }
  }
  
  ngOnInit() {
    
    this.loginForm = this.fb.group({
      email:[this.email ,[Validators.required,Validators.email]],
      password:['' ,[Validators.required,Validators.minLength(6)]]
    })
    this.activeRoute.params.subscribe(({email})=>{
      
      if(!email) return;
      else{

       this.email=email;
       console.log("thank you for signing up",email);
      }

      location.reload();
    });
  }
  
}
