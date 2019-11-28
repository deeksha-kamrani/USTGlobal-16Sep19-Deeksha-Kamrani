import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  sportsnews;
  constructor(private http: HttpClient) {
    this.getsportsNews();
   }

  ngOnInit() {
  }
  getsportsNews() {
    // tslint:disable-next-line: max-line-length
    this.http.get<any>('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=ea1c3beba971443ea9676fb1925ffbb2').subscribe(data1 => {
        this.sportsnews = data1.articles;
      }, err => {
        console.log(err);
      }, () => {
        console.log('dubai news got successfull');
      });
  }

}
