import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({
  selector : 'app-home',
  templateUrl : './home.component.html',
  styleUrls : ['./home.component.css']
})

export class HomeComponent {
  searchs:any=[];

   constructor(private http: HttpClient) {}
  selectedSearch(event){
    console.log(event.target.value);
  

  this.http.get<any>(`http://www.omdbapi.com/?s=${event.target.value}&apikey=349d66e7`).subscribe(data => {
  console.log(data.Search);  
  this.searchs = data.Search;
    }, err => {
        console.log(err);
    }, () => {
        console.log('movies got successfully');
    });
  }

   ngOnInit() {
  }
   
    
}