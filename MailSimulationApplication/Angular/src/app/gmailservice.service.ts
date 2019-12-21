import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GmailserviceService {

  constructor(private http: HttpClient) { }

  login(data): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/login`,data);
  }
  changePassword(data): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/change-password`,data);
  }
}
