// cart-list.component.ts
import { Component, OnInit } from '@angular/core';
import { QuantityService } from '../quantity.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  // cartItems: CartItem[] = [];

  constructor(private quantityService: QuantityService) {}

  ngOnInit() {
    // this.cartItems = this.quantityService.getCartItems();
    // this.quantityService.cartData.subscribe((items) => {
    //   this.cartItems = items;
    // });
  }
}
