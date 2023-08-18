import { Component } from '@angular/core';
import { QuantityService } from '../quantity.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  cartItems = 0;

  constructor(private productService: QuantityService) {
    let cartData = localStorage.getItem('localCart');
    if (cartData) {
      this.cartItems = JSON.parse(cartData)?.length || 0;
    }

    this.productService.cartData.subscribe((items) => {
      this.cartItems = items.length;
    });
  }

}
