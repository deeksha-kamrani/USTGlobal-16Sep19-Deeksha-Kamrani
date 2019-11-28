import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-russia',
  templateUrl: './russia.component.html',
  styleUrls: ['./russia.component.css']
})
export class RussiaComponent implements OnInit {
  russianews;
  constructor(private http: HttpClient) {
    this.getrussiaNews();
  }

  ngOnInit() {
  }
  getrussiaNews() {
    // tslint:disable-next-line: max-line-length
    this.http.get<any>('https://newsapi.org/v2/top-headlines?country=ru&category=business&apiKey=ea1c3beba971443ea9676fb1925ffbb2').subscribe(data1 => {
        this.russianews = data1.articles;
      }, err => {
        console.log(err);
      }, () => {
        console.log('dubai news got successfull');
      });
  }

}
