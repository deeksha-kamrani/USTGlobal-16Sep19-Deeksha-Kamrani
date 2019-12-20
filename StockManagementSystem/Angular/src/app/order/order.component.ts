import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { UserService } from '../user-service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(public userService: UserService) {
    this.userService.getOrderData().subscribe((data) => {
      console.log(data.orderProductBeanList);
      this.orders = data.orderProductBeanList;
    });
   }
  selectedOrder: Order = {
    orderId: null,
    cartId: null,
    id: null,
    productId: null,
    productName: null,
    productPrice: null,
    productCategory: null,
    productCompany: null,
    productQuantity: null

  };
  orders: [];

  ngOnInit() {
  }

}
