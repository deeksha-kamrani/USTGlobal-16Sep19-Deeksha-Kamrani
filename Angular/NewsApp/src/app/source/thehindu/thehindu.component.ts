import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-thehindu',
  templateUrl: './thehindu.component.html',
  styleUrls: ['./thehindu.component.css']
})
export class ThehinduComponent implements OnInit {
  thehindunews;
  constructor(private http: HttpClient) {
    this.getthehinduNews();
   }

  ngOnInit() {
  }
  getthehinduNews() {
    // tslint:disable-next-line: max-line-length
    this.http.get<any>('https://newsapi.org/v2/top-headlines?sources=the-hindu&apiKey=ea1c3beba971443ea9676fb1925ffbb2').subscribe(data1 => {
        this.thehindunews = data1.articles;
      }, err => {
        console.log(err);
      }, () => {
        console.log('bbc souce got successfull');
      });
  }

}
