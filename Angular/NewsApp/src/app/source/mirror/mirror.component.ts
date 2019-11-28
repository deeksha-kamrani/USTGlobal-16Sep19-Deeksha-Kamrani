import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mirror',
  templateUrl: './mirror.component.html',
  styleUrls: ['./mirror.component.css']
})
export class MirrorComponent implements OnInit {
mirrornews;
  constructor(private http: HttpClient) {
    this.getmirrorNews();
   }

  ngOnInit() {
  }
  getmirrorNews() {
    // tslint:disable-next-line: max-line-length
    this.http.get<any>('https://newsapi.org/v2/top-headlines?sources=mirror&apiKey=ea1c3beba971443ea9676fb1925ffbb2').subscribe(data1 => {
        this.mirrornews = data1.articles;
      }, err => {
        console.log(err);
      }, () => {
        console.log('mirror souce got successfull');
      });
  }

}
