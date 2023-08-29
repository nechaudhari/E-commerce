import { Component } from '@angular/core';
import { QuantityService } from '../quantity.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
 
  productsJSON = localStorage.getItem('localCart');
  products: any[] = this.productsJSON ? JSON.parse(this.productsJSON) : [];
  
}
