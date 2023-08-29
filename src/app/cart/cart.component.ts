import { Component } from '@angular/core';
import { QuantityService } from '../quantity.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
 
  mainProducts: any = (localStorage.getItem("localCart"));
  ngOnInit(){
   
    // const productsJSON = localStorage.getItem('localCart');
    // const products: any = productsJSON ? JSON.parse(productsJSON) : [];
    // this.mainProducts.push(products);
  }

}
