import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fox',
  templateUrl: './fox.component.html',
  styleUrls: ['./fox.component.css']
})
export class FoxComponent implements OnInit {
  foxnews;
  constructor(private http : HttpClient) {
    this.getfoxNews();
   }

  ngOnInit() {
  }
  getfoxNews() {
    // tslint:disable-next-line: max-line-length
    this.http.get<any>('https://newsapi.org/v2/top-headlines?sources=fox-news&apiKey=ea1c3beba971443ea9676fb1925ffbb2').subscribe(data1 => {
        this.foxnews = data1.articles;
      }, err => {
        console.log(err);
      }, () => {
        console.log('bbc souce got successfull');
      });
  }

}
