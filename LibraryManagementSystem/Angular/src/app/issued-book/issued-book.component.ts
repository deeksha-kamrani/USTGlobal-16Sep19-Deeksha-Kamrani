import { Component, OnInit } from '@angular/core';
import { BookTransactionResponse } from '../book-transaction-response';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-issued-book',
  templateUrl: './issued-book.component.html',
  styleUrls: ['./issued-book.component.css']
})
export class IssuedBookComponent implements OnInit {

  issuedBooks: BookTransactionResponse;
  constructor(private auth: AuthService,
    private http: HttpClient) {
    this.getIssuedBook();
  }
  getIssuedBook() {
    this.http.get<BookTransactionResponse>(`http://localhost:8081/libms/library/librarian/getIssuedBooks`)
      .subscribe(response => {
        if (response) {
          this.issuedBooks = response;
        }
      });
  }

  ngOnInit() {
  }

}
