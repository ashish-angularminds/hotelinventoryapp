import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private route: Router) { }

  test: string='';
  user = {
    email: '',
    password: ''
  }

  login() {
    if (this.user.email == "admin@123.in" && this.user.password == '123') {
      this.route.navigate(['/rooms', '']);
    }
  }

}
