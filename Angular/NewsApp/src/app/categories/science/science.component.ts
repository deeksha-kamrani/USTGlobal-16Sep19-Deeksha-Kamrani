import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {
  sciencenews;
  constructor(private http: HttpClient) {
    this.getscienceNews();
   }

  ngOnInit() {
  }
  getscienceNews() {
    // tslint:disable-next-line: max-line-length
    this.http.get<any>('https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=ea1c3beba971443ea9676fb1925ffbb2').subscribe(data1 => {
        this.sciencenews = data1.articles;
      }, err => {
        console.log(err);
      }, () => {
        console.log('dubai news got successfull');
      });
  }

}
