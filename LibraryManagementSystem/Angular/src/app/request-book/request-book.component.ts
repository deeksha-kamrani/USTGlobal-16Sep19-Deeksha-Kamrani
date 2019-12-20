import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { BookResponse } from '../bookResponse';

@Component({
  selector: 'app-request-book',
  templateUrl: './request-book.component.html',
  styleUrls: ['./request-book.component.css']
})
export class RequestBookComponent implements OnInit {
  books: BookResponse;
  constructor(private http: HttpClient, private auth: AuthService, private router: Router) { }

  searchBook(requestForm: NgForm) {
    this.http.post<BookResponse>(`http://localhost:8081/libms/searchBooks`, requestForm.value)
      .subscribe(response => {
        if (response != null) {
          this.books = response;
          console.log(this.books);
        } else {
          alert('No books found with ' + requestForm.value.bookName + ' and ' + requestForm.value.author1);
        }
      });
  }

  requestBook(book) {
    this.http.get(`http://localhost:8081/libms/requsetBook/${book.bookId}`)
      .subscribe(response => {
        if (response) {
          alert('Requested Succefully');
        }
      });
  }

  ngOnInit() {
  }

}
