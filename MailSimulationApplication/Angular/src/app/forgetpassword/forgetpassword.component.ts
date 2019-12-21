import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  constructor() { }
  
  password(passwordForm : NgForm) {
    console.log(passwordForm.value);
  }

  ngOnInit() {
  }

}
