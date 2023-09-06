import { Component, OnInit } from '@angular/core';
import { QuantityService } from '../quantity.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit{
  removeCart = false;
  // products: Product[] = [];
  // totalCost: number = 0;

  productsJSON = localStorage.getItem('localCart');
  products: any = this.productsJSON ? JSON.parse(this.productsJSON) : [];

  cost = this.products.map((item: any) => item.itemCost * item.quantity);
  totalCost = this.cost.reduce((total: any, cost: any) => total + cost, 0);

  payable = this.totalCost + 50 + 30;

  constructor(
    private http: HttpClient,private router: Router,private activeRoute: ActivatedRoute,private quantityService: QuantityService) {}

  ngOnInit() {
    this.quantityService.cartData.subscribe((cartData) => {
      this.products = cartData;
      // this.calculateTotalCost();
    });
    // this.calculateTotalCost();
  }

  // calculateTotalCost() {
  //   this.totalCost = this.products.reduce(
  //     (total: number, product: Product) => total + product.price,
  //     0
  //   );
  // }
  

  RemoveToCart(ProductId: number) {
    this.quantityService.removeItemFromCart(ProductId);
    this.products = this.products.filter((item: any) => item.id !== ProductId);
    this.removeCart = false;
  }
}
