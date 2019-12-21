import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  constructor( private router: Router, private http: HttpClient) { }

  login(loginForm: NgForm) {
    console.log(loginForm.value);

    this.http.post<LoginResponse>(`http://localhost:8081/login`, loginForm).subscribe(response => {
      console.log('Response of login', response);
      if (response && response.message === 'login successful') {
        localStorage.setItem('userDetails', JSON.stringify(response));
        this.router.navigateByUrl('/');
      }
      loginForm.reset();
    }, err => {
      console.log(err);
      this.error = err.error.message;
    });
  }

  ngOnInit() {
  }

}
