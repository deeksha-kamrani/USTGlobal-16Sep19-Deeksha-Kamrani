import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  password;
  cpassword;
  check;
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
  registerData(registerForm) {
    console.log(registerForm.value);
    this.password = registerForm.value.password;
    this.cpassword = registerForm.value.cpassword;
    if (this.password == '')
      alert("Please enter Password");
    else if (this.cpassword == '')
      alert("Please enter confirm password");
    else if (this.password != this.cpassword) {
      alert("\nPassword did not match: Please try again...");
      return false;
    }
    else {
      alert("Password Match");
      return true;
    }
  }

}
