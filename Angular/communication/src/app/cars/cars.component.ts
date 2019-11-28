import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
selectedCar;
  Cars = [
    {
      imgUrl : 'https://cdn.pixabay.com/photo/2015/08/13/17/24/vintage-1950s-887273__340.jpg',
      name : 'Pic1',
      model : 'Model : 2001 ',
      desc : 'The Maruti Swift has 1 Diesel Engine and 1 Petrol Engine on offer. The Diesel engine is 1248 cc while the Petrol engine 3840mm.'
    },
    {
      imgUrl : 'https://cdn.pixabay.com/photo/2016/11/21/14/03/beautiful-1845572__340.jpg',
      name : 'Pic2',
      model : 'Model : 1945',
      desc : 'The Suzuki has 1 kerosine Engine and 1 Diesel Engine on offer. The Diesel engine is 1248 cc while the'
    },
    {
      imgUrl : 'https://cdn.pixabay.com/photo/2019/09/01/12/59/traffic-4445171__340.jpg',
      name : 'Pic3',
      model : 'Model : 2014 ' ,
      desc : 'The Lamborghini Swift has 1 Lamborghini Engine and 1 Lamborghini Engine on offer. The Diesel engine is'
    },
    {
      imgUrl : 'https://cdn.pixabay.com/photo/2014/07/31/00/30/vw-beetle-405876__340.jpg',
      name : 'Pic4',
      model : 'Model : 2010' ,
      desc : 'BMW cars price starts at Rs. 35.20 lakh for the cheapest car X1 and goes up to Rs. 2.43 crore for the top'
    },
    {
      imgUrl : 'https://cdn.pixabay.com/photo/2014/01/04/13/34/taxi-238478__340.jpg',
      name : 'Pic5',
      model : 'Model : 1945 ' ,
      desc : 'BMW cars price starts at Rs. 35.20 lakh for the cheapest car X1 and goes up to Rs. 2.43 crore for the top'
    },
    {
      imgUrl : 'https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014617__340.jpg',
      name : 'Pic6',
      model : 'Model : 1800 ' ,
      desc : 'BMW cars price starts at Rs. 35.20 lakh for the cheapest car X1 and goes up to Rs. 2.43 crore for the top'
    },
    {
      imgUrl : 'https://cdn.pixabay.com/photo/2016/11/29/01/22/automotive-1866521__340.jpg',
      name : 'Pic7',
      model : 'Model : 1756' ,
      desc : 'BMW cars price starts at Rs. 35.20 lakh for the cheapest car X1 and goes up to Rs. 2.43 crore for the top'
    },
    {
      imgUrl : 'https://cdn.pixabay.com/photo/2016/04/13/21/58/auto-1327801__340.jpg',
      name : 'Pic8' ,
      model : 'Model : 1600' ,
      desc : 'BMW cars price starts at Rs. 35.20 lakh for the cheapest car X1 and goes up to Rs. 2.43 crore for the top'
    },
    {
      imgUrl : 'https://cdn.pixabay.com/photo/2016/11/21/14/04/car-1845573__340.jpg',
      name : 'Pic9',
      model : 'Model : 1400' ,
      desc : 'BMW cars price starts at Rs. 35.20 lakh for the cheapest car X1 and goes up to Rs. 2.43 crore for the top'
    },
    {
      imgUrl : 'https://cdn.pixabay.com/photo/2018/10/28/14/34/oldtimer-3778936__340.jpg',
      name : 'Pic10',
      model : 'Model : 2012 ' ,
      desc : 'BMW cars price starts at Rs. 35.20 lakh for the cheapest car X1 and goes up to Rs. 2.43 crore for the top'
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
