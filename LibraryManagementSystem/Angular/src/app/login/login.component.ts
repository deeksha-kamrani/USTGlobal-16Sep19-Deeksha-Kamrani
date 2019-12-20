import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from '../LoginResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: string;

  constructor(private auth: AuthService, private router: Router, private http: HttpClient) { }

  login(loginForm: NgForm) {
    console.log(loginForm);
    this.http.post<LoginResponse>(`http://localhost:8081/libms/login`, loginForm).subscribe(response => {
      console.log('Response of login', response);

      if (response != null && response.type === 'Admin') {
        this.router.navigate(['/']);
        this.auth.isALoggedIn = true;

      } else if (response != null && response.type === 'Librarian') {
        this.router.navigate(['/']);
        this.auth.isLLoggedIn = true;

      } else if (response != null && response.type === 'Student') {
        this.router.navigate(['/']);
        this.auth.isSLoggedIn = true;

      } else {
        window.confirm('Login Failed');
      }

    }, err => {
      console.log(err);
      this.error = err.error.message;
    });
  }
  ngOnInit() {
  }
}