import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usa',
  templateUrl: './usa.component.html',
  styleUrls: ['./usa.component.css']
})
export class UsaComponent implements OnInit {
  usanews;
  constructor(private http: HttpClient) {
    this.getusaNews();
   }

  ngOnInit() {
  }
  getusaNews() {
  this.http.get<any>('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ea1c3beba971443ea9676fb1925ffbb2').subscribe(data1 => {
        this.usanews = data1.articles;
      }, err => {
        console.log(err);
      }, () => {
        console.log('USA news got successfull');
      });
  }
}
