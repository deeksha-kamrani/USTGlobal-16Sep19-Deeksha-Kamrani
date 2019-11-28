import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bike-child',
  templateUrl: './bike-child.component.html',
  styleUrls: ['./bike-child.component.css']
})
export class BikeChildComponent implements OnInit {
  @Input() bike : {imgUrl : String , names : String , model : String, desc : String};
  constructor() { }

  ngOnInit() {
  }

}
