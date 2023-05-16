import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private route: Router, private loginservice: LoginService) { }

  test: string = '';
  user = {
    email: '',
    password: ''
  }

  login() {

    if (this.loginservice.login(this.user.email, this.user.password)) {
      this.route.navigate(['/rooms']);
    }
  }

}
