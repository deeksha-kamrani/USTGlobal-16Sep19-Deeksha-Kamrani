import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-laptopchild',
  templateUrl: './laptopchild.component.html',
  styleUrls: ['./laptopchild.component.css']
})
export class LaptopchildComponent implements OnInit {
@Input() laptop : {imgUrl : String , name : String , price : String , desc : String};
  constructor() { }

  ngOnInit() {
  }

}
