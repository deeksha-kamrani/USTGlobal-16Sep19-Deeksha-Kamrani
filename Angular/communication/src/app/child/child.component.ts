import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() car : {imgUrl : String , name : String , model : String, desc : String};

    
constructor() { }

  ngOnInit() {
  }

}
