import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-buisness',
  templateUrl: './buisness.component.html',
  styleUrls: ['./buisness.component.css']
})
export class BuisnessComponent implements OnInit {
  buisnessnews;
  constructor(private http: HttpClient) { 
    this.getbuisnessNews();
  }

  ngOnInit() {
  }
  getbuisnessNews() {
    // tslint:disable-next-line: max-line-length
    this.http.get<any>('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ea1c3beba971443ea9676fb1925ffbb2').subscribe(data1 => {
        this.buisnessnews = data1.articles;
      }, err => {
        console.log(err);
      }, () => {
        console.log('buisness news got successfull');
      });
  }
}
