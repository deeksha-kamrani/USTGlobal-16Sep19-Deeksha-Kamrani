import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookResponse } from '../bookResponse';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.css']
})
export class DisplayBooksComponent implements OnInit {
  books: BookResponse;
  constructor(private http: HttpClient, private auth: AuthService) {
    this.getData();
  }

  ngOnInit() {
  }

  getData() {
    this.http.get<BookResponse>(`http://localhost:8081/libms/library/librarian/getBooks`).subscribe(response => {
      this.books = response;
      console.log(this.books);
    });
  }
}
