import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  technews;
  constructor(private http: HttpClient) {
    this.gettechNews();
   }

  ngOnInit() {
  }
  gettechNews() {
    // tslint:disable-next-line: max-line-length
    this.http.get<any>('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=ea1c3beba971443ea9676fb1925ffbb2').subscribe(data1 => {
        this.technews = data1.articles;
      }, err => {
        console.log(err);
      }, () => {
        console.log('dubai news got successfull');
      });
  }
}
