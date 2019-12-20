import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../product-service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {


  constructor(public productService: ProductService) { }

  submitForm(addProduct: NgForm) {
    console.log(addProduct.value);
    this.productService.postData(addProduct.value).subscribe(res => {
      console.log('.........response', res);
      addProduct.reset
    },
      err => {
        console.log(err);
      }
    );
  }
  ngOnInit() {
  }

}
