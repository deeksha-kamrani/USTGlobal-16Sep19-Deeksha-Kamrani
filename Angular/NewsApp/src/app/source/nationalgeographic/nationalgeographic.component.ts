import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nationalgeographic',
  templateUrl: './nationalgeographic.component.html',
  styleUrls: ['./nationalgeographic.component.css']
})
export class NationalgeographicComponent implements OnInit {
nationalnews;
  constructor(private http: HttpClient ) {
    this.getnationalNews();
   }

  ngOnInit() {
  }
  getnationalNews() {
    // tslint:disable-next-line: max-line-length
    this.http.get<any>('https://newsapi.org/v2/top-headlines?sources=national-geographic&apiKey=ea1c3beba971443ea9676fb1925ffbb2').subscribe(data1 => {
        this.nationalnews = data1.articles;
      }, err => {
        console.log(err);
      }, () => {
        console.log('national souce got successfull');
      });
  }

}
