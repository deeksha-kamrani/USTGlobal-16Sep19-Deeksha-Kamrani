import { Component, OnInit } from '@angular/core';
import { GmailserviceService } from 'src/app/gmailservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  constructor(private mailService: GmailserviceService, private route: Router) { }

  ngOnInit() {
  }
  password;
  cpassword;
  check;
  cdata;




  passwords(event) {
    this.password = event.target.value;
  }
  cpasswords(event) {
    this.cpassword = event.target.value;
    console.log(this.cpassword);
    if (this.password === this.cpassword) {
      this.check = false;
    } else {
      this.check = true;
    }
  }
  changepassword(form) {
    console.log(form.value);
    this.cdata = null;
    console.log(form.value);
    
    this.mailService.changePassword(form.value).subscribe(data => {
      console.log(data);
      this.cdata = data.message;
      localStorage.setItem('loginDetails', JSON.stringify(data));
      localStorage.setItem('demo', JSON.stringify(data.studentBeans));
      if (data.message === 'Success') {
        this.route.navigateByUrl('/studenthome');
      }
    }, err => {
      this.cdata = err.message;
    }, () => {
      console.log('success');
    });
  }
  }
