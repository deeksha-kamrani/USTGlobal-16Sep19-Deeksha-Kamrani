import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usatoday',
  templateUrl: './usatoday.component.html',
  styleUrls: ['./usatoday.component.css']
})
export class UsatodayComponent implements OnInit {
  usatodaynews;
  constructor(private http: HttpClient) {
    this.getusatodayNews();
   }

  ngOnInit() {
  }
  getusatodayNews() {
    // tslint:disable-next-line: max-line-length
    this.http.get<any>('https://newsapi.org/v2/top-headlines?sources=usa-today&apiKey=ea1c3beba971443ea9676fb1925ffbb2').subscribe(data1 => {
        this.usatodaynews = data1.articles;
      }, err => {
        console.log(err);
      }, () => {
        console.log('usaToday souce got successfull');
      });
  }


}
