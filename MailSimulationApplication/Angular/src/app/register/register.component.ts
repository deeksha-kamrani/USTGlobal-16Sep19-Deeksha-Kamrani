import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { RegisterResponse } from '../RegisterResponse';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error: string;

  constructor(private router: Router, private http: HttpClient) { }

  register(registerForm: NgForm) {
    console.log(registerForm.value);
    this.http.post<RegisterResponse>(`http://localhost:8080/mailapp/register`, registerForm.value).subscribe(response => {
      registerForm.reset();
      if (response) {
        alert('User added');
        this.router.navigate(['/']);
      } else {
        alert('Failed to Register');
      }
    });
  }

  ngOnInit() {
  }

}
