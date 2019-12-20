import { Component, OnInit } from '@angular/core';
import { LoginResponse } from '../LoginResponse';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {
  studentData: LoginResponse;
  constructor(private http: HttpClient, private router: Router, private service: AuthService) { }
  id = null;

  ngOnInit() {
  }

  getStudentInfo(deleteStuduent: NgForm) {
    this.http.get<LoginResponse>(`http://localhost:8081/libms/getStudent/${deleteStuduent.value.id}`)
      .subscribe(response => {
        if (response != null) {
        } else {
          alert('No Student Data Present for ID ' + deleteStuduent.value.id);
        }
        this.studentData = response;
        console.log(response);
      });
  }

  deleteStudent(id) {
    this.http.delete(`http://localhost:8081/libms/deleteStudent/${id}`)
      .subscribe(response => {
        if (response) {
          alert('Student deleted Successfully');
          this.router.navigate(['/']);
          console.log(response);
        } else {
          alert('Failed to delete the Student');
          this.router.navigate(['/']);
        }
      });

  }


}
