import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  passcode: any;
  username: any;

  constructor(private auth: AuthService) {
  }
  async login() {
    await this.auth.login(this.passcode, this.username);
  }
}
