import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { GmailserviceService } from 'src/app/gmailservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

login;

  constructor(private mailService: GmailserviceService, private route: Router) { }

  ngOnInit() {
  }
 


  loginData(form: NgModel) {

    this.login = null;
    console.log(form.value);
    
    this.mailService.login(form.value).subscribe(data => {
      console.log(data);
      this.login = data.message;
      localStorage.setItem('loginDetails', JSON.stringify(data));
      localStorage.setItem('demo', JSON.stringify(data.studentBeans));
      if (data.message === 'Success') {
        this.route.navigateByUrl('/studenthome');
      }
    }, err => {
      this.login = err.message;
    }, () => {
      console.log('success');
    });
  }
  
}
