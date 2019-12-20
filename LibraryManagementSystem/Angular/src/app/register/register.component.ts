import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { LoginResponse } from '../LoginResponse';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  error: string;


  constructor(
    private auth: AuthService, private http: HttpClient, private router: Router
  ) { }




  register(registerForm: NgForm) {
    console.log(registerForm.value);
    this.http.post<LoginResponse>(`http://localhost:8081/libms/addLibrarian`, registerForm.value).subscribe(response => {
      registerForm.reset();
      if (response) {
        alert('Student/librarian/admin Added Note this ID for Login  ' + response.id);
        this.router.navigate(['/']);
      } else {
        alert('Failed to add Librarian');
      }
    });
  }


  ngOnInit() {
  }

  ngOnDestroy() {
    this.error = null;
  }

}
