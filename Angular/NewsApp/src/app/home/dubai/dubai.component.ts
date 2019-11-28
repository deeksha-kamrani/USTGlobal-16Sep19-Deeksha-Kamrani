import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dubai',
  templateUrl: './dubai.component.html',
  styleUrls: ['./dubai.component.css']
})
export class DubaiComponent implements OnInit {
  dubainews;
  constructor(private http: HttpClient) {
    this.getdubaiNews();
   }

  ngOnInit() {
  }
  getdubaiNews() {
    // tslint:disable-next-line: max-line-length
    this.http.get<any>('https://newsapi.org/v2/top-headlines?country=au&category=business&apiKey=ea1c3beba971443ea9676fb1925ffbb2').subscribe(data1 => {
        this.dubainews = data1.articles;
      }, err => {
        console.log(err);
      }, () => {
        console.log('dubai news got successfull');
      });
  }

}
