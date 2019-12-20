import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { RegistrationResponse } from '../registrationResponse';
import { BookTransactionResponse } from '../book-transaction-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.css']
})
export class ViewRequestComponent implements OnInit {

  requests: RegistrationResponse;
  acceptedRequest: BookTransactionResponse;
  constructor(private auth: AuthService,
              private http: HttpClient,
              private router: Router) {
    this.getRequest();
  }
  getRequest() {
    this.http.get<RegistrationResponse>(`http://localhost:8081/libms/viewRequest`).subscribe(response => {
      this.requests = response;
      console.log(this.requests);
    });
  }

  acceptRequest(request) {
    this.http.post<BookTransactionResponse>(`http://localhost:8081/libms/library/librarian/accept/${request.registrationId}`, request)
      .subscribe(response => {
        if (response != null) {
          alert('Request Accepted');
          this.getRequest();
          this.acceptedRequest = response;
          this.router.navigate(['/issued-book']);
          console.log(this.acceptedRequest);
        } else {
          alert('Request rejected');
        }
      });
  } 
  denyRequest(request) {
    this.http.delete(`http://localhost:8081/libms/rejectRequest/${request.registrationId}`)
      .subscribe(response => {
        if (response) {
          alert('Request denyed');
          this.getRequest();
        }
      });
  }

  ngOnInit() {
  }

}
