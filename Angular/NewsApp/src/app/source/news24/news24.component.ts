import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news24',
  templateUrl: './news24.component.html',
  styleUrls: ['./news24.component.css']
})
export class News24Component implements OnInit {
  news24;
  constructor(private http: HttpClient) {
    this.getnews24News();
   }

  ngOnInit() {
  }
  getnews24News() {
    // tslint:disable-next-line: max-line-length
    this.http.get<any>('https://newsapi.org/v2/top-headlines?sources=news24&apiKey=ea1c3beba971443ea9676fb1925ffbb2').subscribe(data1 => {
        this.news24 = data1.articles;
      }, err => {
        console.log(err);
      }, () => {
        console.log('news24 souce got successfull');
      });
  }

}
