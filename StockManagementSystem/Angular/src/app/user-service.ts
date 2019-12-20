import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
export class UserService {

    constructor(private http: HttpClient) { }

    postData(data) {
        console.log(data);
        return this.http.post('http://localhost:8080/addProductToCart', data);
      }
    
    

}
