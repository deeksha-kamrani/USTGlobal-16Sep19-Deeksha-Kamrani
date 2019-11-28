import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  name : string = 'Dk';
  imgUrl : string = 'https://cdn.pixabay.com/photo/2019/06/02/17/27/summer-4246927_960_720.jpg';
  address: string = 'Btm 2nd Stage,464001';
  colorName : string ='yellow';
  isActive: boolean =false;
  colSpanValue : number = 2;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.colorName ='red';
      this.isActive =!this.isActive;
    }, 2000);
  }

}
