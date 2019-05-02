import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  userStorage: Object;
  authenticated: boolean;
  userEmail:string;

  constructor() {
    this.userStorage = {};
    this.authenticated = false;
    this.userEmail = "";
  }

  signUp(email: string, password: string) {
    this.userStorage[email] = password;
    this.authenticated = true;
    this.userEmail = email;
  }

  login(email: string, password: string): Observable<boolean> {
    if (!(this.userStorage[email] === password)) return of(false);
    else {
      this.authenticated = true;
      this.userEmail = email;
      return of(true);
    }
  }

  isAuthenticated(): Observable<boolean> {
    return of(this.authenticated);
  }

  logout() {
    this.authenticated = false;
    this.userEmail="";
  }
  getEmail():Observable<string>{
  return of(this.userEmail);
  }

}
