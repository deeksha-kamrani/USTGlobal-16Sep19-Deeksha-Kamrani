import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bbc',
  templateUrl: './bbc.component.html',
  styleUrls: ['./bbc.component.css']
})
export class BbcComponent implements OnInit {
  bbcnews;
  constructor(private http: HttpClient) {
    this.getbbcNews();
   }

  ngOnInit() {
  }
  getbbcNews() {
    // tslint:disable-next-line: max-line-length
    this.http.get<any>('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=ea1c3beba971443ea9676fb1925ffbb2').subscribe(data1 => {
        this.bbcnews = data1.articles;
      }, err => {
        console.log(err);
      }, () => {
        console.log('bbc souce got successfull');
      });
  }

}
