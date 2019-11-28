import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidation } from './custom.validation';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  get text() {
    return this.form.get('text');
  }
  get image() {
    return this.form.get('image');
  }
  get title() {
    return this.form.get('title');
  }
  get desc() {
    return this.form.get('desc');
  }

form = new FormGroup({
  text : new FormControl('', [Validators.required, CustomValidation.unique]),
  image : new FormControl('', [Validators.required]),
  title : new FormControl('', [Validators.required, CustomValidation.unique]),
  desc : new FormControl('', [Validators.required])
});

  constructor() { }

  ngOnInit() {
  }
  add(form) {
    console.log(form);
  
  }

}
