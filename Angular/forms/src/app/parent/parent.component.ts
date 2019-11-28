import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
 selectedCar;
  Cars = [
{
  imgUrl : 'https://cdn.pixabay.com/photo/2016/11/23/17/24/automobile-1853936__340.jpg',
  name : 'Pic1'
},
{
  imgUrl : 'https://cdn.pixabay.com/photo/2016/02/19/10/37/girls-1209321__340.jpg',
  name : 'Pic2'
},
{
  imgUrl : 'https://cdn.pixabay.com/photo/2016/11/23/17/25/beach-1853939__340.jpg',
  name : 'Pic3'
},
{
  imgUrl : 'https://cdn.pixabay.com/photo/2016/01/19/17/57/car-1149997__340.jpg',
  name : 'Pic4'
}
 ]
  constructor() { }

  ngOnInit() {
  }
  sendCar(car){
    console.log(car);
    this.selectedCar = car;
  }

}
