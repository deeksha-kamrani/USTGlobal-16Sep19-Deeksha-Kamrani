import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  healthnews;
  constructor(private http: HttpClient) { 
    this.gethealthNews();
  }

  ngOnInit() {
  }
  gethealthNews() {
    // tslint:disable-next-line: max-line-length
    this.http.get<any>('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=ea1c3beba971443ea9676fb1925ffbb2').subscribe(data1 => {
        this.healthnews = data1.articles;
      }, err => {
        console.log(err);
      }, () => {
        console.log('dubai news got successfull');
      });
  }
}
