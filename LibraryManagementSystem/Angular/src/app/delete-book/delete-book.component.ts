import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { BookResponse } from '../bookResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  books: BookResponse;
  constructor(private auth: AuthService, private http: HttpClient, private router: Router) {
    this.showAllBook();
  }
  bookId = null;

  ngOnInit() {
  }

  showAllBook() {
    this.http.get<BookResponse>(`http://localhost:8081/libms/library/librarian/getBooks`).subscribe(response => {
      this.books = response;
      console.log(this.books);
    });
  }

  deleteLibrarian(bookId) {
    this.http.delete(`http://localhost:8081/libms/deleteBook/${bookId}`).subscribe(resData => {
      if (resData) {
        console.log(resData);
        this.showAllBook();
      } else {
        alert('Failed to Delete Book');
      }
      console.log(resData);
      this.showAllBook();
    }, err => {
      console.log(err);
    });
  }


}
