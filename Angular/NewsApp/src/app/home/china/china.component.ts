import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-china',
  templateUrl: './china.component.html',
  styleUrls: ['./china.component.css']
})
export class ChinaComponent implements OnInit {
  chinanews;
  constructor(private http: HttpClient) {
    this.getchinaNews();
   }

  ngOnInit() {
  }
  getchinaNews() {
    // tslint:disable-next-line: max-line-length
    this.http.get<any>('https://newsapi.org/v2/top-headlines?country=ch&category=business&apiKey=ea1c3beba971443ea9676fb1925ffbb2').subscribe(data1 => {
        this.chinanews = data1.articles;
      }, err => {
        console.log(err);
      }, () => {
        console.log('dubai news got successfull');
      });
  }

}
