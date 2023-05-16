import { Injectable } from '@angular/core';
import { flush } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn: boolean = false;

  isAdmin: boolean = false;

  constructor() { }
  login(email: string, password: string) {
    if (email == "admin@123.in" && password == '123') {
      this.isLoggedIn = true;
      this.isAdmin = true;
    }
    else if (email == "user@123.in" && password == '123') {
      this.isLoggedIn = true;
      this.isAdmin = false;
    }
    return this.isLoggedIn;
  }
}
