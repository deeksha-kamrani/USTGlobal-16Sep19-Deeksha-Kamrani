import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit {
selectedLaptop;
  Laptops = [
    {
      imgUrl : 'https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131__340.jpg',
      name : 'Apple',
      price : 'Rs. 90000',
      desc : 'ASUS Laptop X407UB. Processor. Intel® Core™ i3 6006U Processor, 2 GHz (3 M Cache) Operating System. Windows 10 Pro - ASUS recommends Windows 10 Pro. Memory. DDR4 2400MHz SDRAM, 1 x SO-DIMM s'
    },
    {
      imgUrl : 'https://cdn.pixabay.com/photo/2017/08/10/07/32/dell-2619501__340.jpg',
      name : 'Dell',
      price : 'Rs. 50000',
      desc : 'HP Pavilion x360 With Alexa In-built. Freedom To Do More w/ Power Of Your Voice. Shop Now! Accidental Protection. Protegent Antivirus. Additional Warranty. Theft Insurance. Models: HP Pavilion x360 14, HP'
    },
    {
      imgUrl : 'https://cdn.pixabay.com/photo/2015/11/10/22/23/hp-laptop-1037930__340.jpg',
      name : 'HP',
      price : 'Rs. 70000',
      desc : '2.4GHz 8-core Intel Core i9, Turbo Boost up to 5.0GHz, with 16MB shared L3 cache. 32GB of 2400MHz DDR4 memory. Radeon Pro 560X with 4GB of GDDR5 memory. 2.4GHz 8-core Intel Core i9, T'
    },
    {
      imgUrl : 'https://cdn.pixabay.com/photo/2016/06/08/10/35/laptop-1443559__340.jpg',
      name : 'Sony',
      price : 'Rs. 65000',
      desc : 'Motorola Laptop X407UB. Processor. Intel® Core™ i3 6006U Processor, 2 GHz (3 M Cache) Operating System. Windows 10 Pro - ASUS recommends Windows 10 Pro. Memory. DDR4 2400'
    },
    {
      imgUrl : 'https://cdn.pixabay.com/photo/2015/05/31/10/51/acer-791027__340.jpg',
      name : 'Acer',
      price : 'Rs. 40000',
      desc : 'https://cdn.pixabay.com/photo/2015/05/31/10/51/acer-791027__340.jpg'
    }
  ]
  constructor() { }

  ngOnInit() {
  }
  sendLaptop(laptop){
    console.log(laptop);
    this.selectedLaptop = laptop;
  }

}
