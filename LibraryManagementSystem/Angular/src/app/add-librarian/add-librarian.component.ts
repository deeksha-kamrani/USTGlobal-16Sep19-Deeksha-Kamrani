import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { LoginResponse } from '../LoginResponse';

@Component({
  selector: 'app-add-librarian',
  templateUrl: './add-librarian.component.html',
  styleUrls: ['./add-librarian.component.css']
})
export class AddLibrarianComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private auth: AuthService) { }

  register(registerForm: NgForm) {
    console.log(registerForm.value);
    this.http.post<LoginResponse>(`http://localhost:8081/libms/addLibrarian`, registerForm.value).subscribe(response => {
      registerForm.reset();
      if (response) {
        alert('Librarian Added Note this ID for Login  ' + response.id);
        this.router.navigate(['/']);
      } else {
        alert('Failed to add Librarian');
      }
    });
  }


  ngOnInit() {
  }

}
