import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {
selectedMobile;
  Mobiles = [
    {
     imgUrl : 'https://cdn.pixabay.com/photo/2015/12/13/16/02/ios-1091302__340.jpg',
     name : 'Apple',
     price : 'Rs.6000',
     desc : 'ASUS Mobile X407UB. Processor. Intel® Core™ i3 6006U Processor, 2 GHz (3 M Cache) Operating System. Windows 10 Pro - ASUS recommends Windows 10 Pro. Memory. DDR4 2400MHz SDRAM, 1 '
    },
    {
      imgUrl : 'https://cdn.pixabay.com/photo/2016/11/29/05/08/apple-1867461__340.jpg',
      name : 'Samsung',
      price : 'Rs.40000',
      desc : 'Samsung Galaxy With Alexa In-built. Freedom To Do More w/ Power Of Your Voice. Shop Now! Accidental Protection. Protegent Antivirus. Additional Warranty. Theft Insurance. Models: HP Pa'
     },
     {
      imgUrl : 'https://cdn.pixabay.com/photo/2014/09/23/21/21/iphone-6-458151__340.jpg',
      name : 'One Plus',
      price : 'Rs.7000',
      desc : 'Iphone 5 Crafted From Brushed Aluminium. Laptop W/ Intel Core. Shop Today! Sennheiser Headset @ 299. Get 3Yr Premium Support. Cash off on MS Office. Get Warranty '
     },
     {
      imgUrl : 'https://cdn.pixabay.com/photo/2014/09/23/21/22/iphone-6-458153__340.jpg',
      name : 'Nokia',
      price : 'Rs.45000',
      desc : 'Iphone 5 Crafted From Brushed Aluminium. Laptop W/ Intel Core. Shop Today! Sennheiser Headset @ 299. Get 3Yr Premium Support. Cash off on MS Office. Get Warranty '
     },
     {
      imgUrl : 'https://cdn.pixabay.com/photo/2015/01/20/13/12/macbook-605438__340.jpg',
      name : 'Iphone',
      price : 'Rs.45679',
      desc : 'Iphone 5 Crafted From Brushed Aluminium. Laptop W/ Intel Core. Shop Today! Sennheiser Headset @ 299. Get 3Yr Premium Support. Cash off on MS Office. Get Warranty '
     },
    
  ]
  constructor() { }

  ngOnInit() {
  }
sendMobile(mobile){
  console.log(mobile);
  this.selectedMobile = mobile;
}
}
