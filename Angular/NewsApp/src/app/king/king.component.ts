import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-king',
  templateUrl: './king.component.html',
  styleUrls: ['./king.component.css']
})
export class KingComponent implements OnInit {
  entertainmentone;
  allnews;
  sportsone;
  constructor(private http: HttpClient) {
    this.getentertainmentoneNews();
    this.getallNews();
    this.getsportsone();
   }

  ngOnInit() {
  }
  getentertainmentoneNews() {
    this.http.get<any>('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=ea1c3beba971443ea9676fb1925ffbb2').subscribe(data => {
      this.entertainmentone = data.articles;
      }, err => {
          console.log(err);
      }, () => {
          console.log('entertainmentnews got successfully');
      });
  }
  getallNews() {
    this.http.get<any>('https://newsapi.org/v2/top-headlines?country=in&apiKey=ea1c3beba971443ea9676fb1925ffbb2').subscribe(data => {
      this.allnews = data.articles;
      }, err => {
          console.log(err);
      }, () => {
          console.log('All India news got successfully');
      });
  }
  getsportsone() {
    this.http.get<any>('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=ea1c3beba971443ea9676fb1925ffbb2').subscribe(data => {
      this.sportsone = data.articles;
      }, err => {
          console.log(err);
      }, () => {
          console.log('All India news got successfully');
      });
  }
}
