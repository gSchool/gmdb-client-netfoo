import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  userStorage:Object;
  constructor() {
    this.userStorage ={};
   }
  signUp(email:string,password:string){
    this.userStorage[email] =password;
  }
  login(email:string,password:string):Observable<boolean>{
    return of((this.userStorage[email]===password))
  }

}
