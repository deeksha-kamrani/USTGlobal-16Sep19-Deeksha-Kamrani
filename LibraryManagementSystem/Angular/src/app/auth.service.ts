import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isALoggedIn = false;
  isLLoggedIn = false;
  isSLoggedIn = false;

  constructor(private http: HttpClient) { }

  registerUser(user): Observable<any> {
    return this.http.post('http://localhost:8081/libms/library/librarian/user', user);
  }

  isAdminLoggedIn() {
    if (this.isALoggedIn) {
      return true;
    }
    return false;
  }


  isLibrarianLoggedIn() {
    if (this.isLLoggedIn) {
      return true;
    }
    return false;
  }

  isStudentLoggedIn() {
    if (this.isSLoggedIn) {
      return true;
    }
    return false;
  }

}
