import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  indianews;
  constructor(private http: HttpClient) {
    this.getindiaNews();
  }

  ngOnInit() {
  }
  getindiaNews() {
    this.http.get<any>('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ea1c3beba971443ea9676fb1925ffbb2').subscribe(data => {
      this.indianews = data.articles;
      }, err => {
          console.log(err);
      }, () => {
          console.log('news got successfully');
      });
  }

}
