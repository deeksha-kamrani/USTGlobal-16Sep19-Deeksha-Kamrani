import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-espn',
  templateUrl: './espn.component.html',
  styleUrls: ['./espn.component.css']
})
export class EspnComponent implements OnInit {
  espnnews;
  constructor(private http: HttpClient) {
    this.getespnNews();
   }

  ngOnInit() {
  }
  getespnNews() {
    // tslint:disable-next-line: max-line-length
    this.http.get<any>('https://newsapi.org/v2/top-headlines?sources=espn&apiKey=ea1c3beba971443ea9676fb1925ffbb2').subscribe(data1 => {
        this.espnnews = data1.articles;
      }, err => {
        console.log(err);
      }, () => {
        console.log('bbc souce got successfull');
      });
  }

}
