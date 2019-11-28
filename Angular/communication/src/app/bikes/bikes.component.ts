import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {
  selectedBike;
  Bikes = [
    {
    imgUrl : 'https://cdn.pixabay.com/photo/2016/04/07/06/53/bmw-1313343__340.jpg',
    names : 'Bike1',
    model : 'Model : 1945',
    desc : 'The Bugatti La Voiture Noire is a one-off supercar based on the Chiron. Unveiled at the 2019 Geneva Motor Show, it joins the Divo as a derivative from the already famous Chiron hypercar. The La Voiture Noire is a'
    },
    {
    imgUrl : 'https://cdn.pixabay.com/photo/2014/07/31/23/37/motorbike-407186__340.jpg',
    names : 'Bike2',
    model : 'Model : 1998',
    desc : 'Specs overview. Engine. 2.5-liter five-cylinder. Horsepower. 394. Acceleration (0—60 mph) 3.9 seconds. Torque (lb-ft @ rpm) 354. Transmission. Seven-speed S tronic® dual-clutch automatic transmission and'
    },
    {
    imgUrl : 'https://cdn.pixabay.com/photo/2014/07/31/23/37/motorbike-407186__340.jpg',
    names : 'Bike3',
    model : 'Model : 2005',
    desc : 'Audi A3 Variants & Price: The Audi A3 is available in two variants: Premium Plus and Technology, priced from Rs 28.99 lakh to 31.99 lakh (ex-showroom pan-India). Audi A3 Engines: The A3 comes with a 1.4-litre TFSI'
    },
    {
    imgUrl : 'https://cdn.pixabay.com/photo/2015/05/15/14/38/couple-768607__340.jpg',
    names : 'Bike4',
    model : 'Model : 2010',
    desc : 'The Suzuki has 1 kerosine Engine and 1 Diesel Engine on offer. The Diesel engine is 1248 cc while the kersine engine is 466 cc. Depending upon the variant and fuel type the Swift has a mileage of 22.0 to 28.4 kmpl. Th'
    },
    {
    imgUrl : 'https://cdn.pixabay.com/photo/2016/11/18/21/30/bike-1836962__340.jpg',
    names : 'Bike5',
    model : 'Model : 2001',
    desc : 'The Petrol engine is 6498 cc. It is available with the Automatic transmission. Depending upon the variant and fuel type the Aventador has a mileage of 5.0 to 7.69 kmpl. The Aventador is a 2 seater Coupe and has a'
    }
  ]
  constructor() { }

  ngOnInit() {
  }
  sendBike(bike){
    console.log(bike);
    this.selectedBike = bike;
  }

}
