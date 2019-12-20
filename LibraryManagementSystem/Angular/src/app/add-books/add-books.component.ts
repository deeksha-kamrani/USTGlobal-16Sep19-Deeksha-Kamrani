import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  addBook(addBookForm: NgForm) {
    console.log(addBookForm.value);
    this.http.post(`http://localhost:8081/libms/addBooks`, addBookForm.value).subscribe(response => {
      addBookForm.reset();
      if (response != null) {
        alert('Book Added');
        this.router.navigate(['/']);
      } else {
        alert('Failed to add book');
      }
    });
  }


  ngOnInit() {
  }

}
