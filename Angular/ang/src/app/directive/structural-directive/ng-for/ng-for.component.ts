import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  Products = [ {
    img : 'https://cdn.pixabay.com/photo/2019/09/30/18/41/taxi-4516525__340.jpg',
    name : 'deeksha' ,
    price : '50'
  },{
    img : 'https://cdn.pixabay.com/photo/2019/09/30/19/20/caravansary-4516601__340.jpg',
    name : 'dk' ,
    price : '50'
  },{
    img : 'https://cdn.pixabay.com/photo/2019/02/06/16/32/architect-3979490__340.jpg',
    name : 'deekayy' ,
    price : '50'
  }

  ]

  constructor() { }

  ngOnInit() {
  }

}
