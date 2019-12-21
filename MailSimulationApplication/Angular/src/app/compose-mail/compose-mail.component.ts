import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-compose-mail',
  templateUrl: './compose-mail.component.html',
  styleUrls: ['./compose-mail.component.css']
})
export class ComposeMailComponent implements OnInit {

  constructor() { }

  compose(composeForm: NgForm) {
    console.log(composeForm.value);
  }

  ngOnInit() {
  }

}
