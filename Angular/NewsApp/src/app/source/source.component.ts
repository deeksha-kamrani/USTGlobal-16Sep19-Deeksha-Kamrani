import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})
export class SourceComponent implements OnInit {
  sourcenews;
  constructor(private http: HttpClient) {
    this.getsourceNews();
   }

  ngOnInit() {
  }
  getsourceNews() {
    // tslint:disable-next-line: max-line-length
    this.http.get<any>('https://newsapi.org/v2/top-headlines?sources=al-jazeera-english&apiKey=ea1c3beba971443ea9676fb1925ffbb2').subscribe(data1 => {
        this.sourcenews = data1.articles;
      }, err => {
        console.log(err);
      }, () => {
        console.log('bbc souce got successfull');
      });
  }
}
