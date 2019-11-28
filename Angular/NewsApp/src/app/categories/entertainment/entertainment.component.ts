import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {
  entertainmentnews;
  constructor(private http: HttpClient) {
    this.getentertainmentNews();
   }

  ngOnInit() {
  }
  getentertainmentNews() {
    // tslint:disable-next-line: max-line-length
    this.http.get<any>('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=ea1c3beba971443ea9676fb1925ffbb2').subscribe(data1 => {
        this.entertainmentnews = data1.articles;
      }, err => {
        console.log(err);
      }, () => {
        console.log('dubai news got successfull');
      });
  }
}
