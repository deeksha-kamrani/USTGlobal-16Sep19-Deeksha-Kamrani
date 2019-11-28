import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-times',
  templateUrl: './times.component.html',
  styleUrls: ['./times.component.css']
})
export class TimesComponent implements OnInit {
  timesnews;
  constructor(private http: HttpClient) {
    this.gettimesNews();
   }

  ngOnInit() {
  }
  gettimesNews() {
    // tslint:disable-next-line: max-line-length
    this.http.get<any>('https://newsapi.org/v2/top-headlines?sources=the-times-of-india&apiKey=ea1c3beba971443ea9676fb1925ffbb2').subscribe(data1 => {
        this.timesnews = data1.articles;
      }, err => {
        console.log(err);
      }, () => {
        console.log('bbc souce got successfull');
      });
  }


}
