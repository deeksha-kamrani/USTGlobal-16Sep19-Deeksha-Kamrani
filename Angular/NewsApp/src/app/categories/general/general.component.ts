import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  generalnews;
  constructor(private http: HttpClient) {
    this.getgeneralNews();
   }

  ngOnInit() {
  }
  getgeneralNews() {
    // tslint:disable-next-line: max-line-length
    this.http.get<any>('https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=ea1c3beba971443ea9676fb1925ffbb2').subscribe(data1 => {
        this.generalnews = data1.articles;
      }, err => {
        console.log(err);
      }, () => {
        console.log('dubai news got successfull');
      });
  }

}
