import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              private router: Router) { }
  async login(password: string, username: string) {
    try {
      const res = await this.http.post('http://127.0.0.1:5000/login', {
        "email":username,
        "password":password
      }).subscribe(async (result: any) => {
        if (result) {
          localStorage.setItem('access_token', result.access_token);
          await this.router.navigate(['view']);
        }
      });
    } catch (e) {
      console.error(e);
    }

  }
}
