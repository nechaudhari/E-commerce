import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuantityService } from '../quantity.service';
import { BehaviorSubject , Subject} from 'rxjs';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  items: any[] = [];
  // private cartSubject = new BehaviorSubject<number[]>([]);
  // getCartSubject = this.cartSubject.asObservable();

  


  constructor(private http: HttpClient,private router: Router,private quantityService: QuantityService) {}

 
  

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.http.get<any[]>('http://localhost:3000/items').subscribe((data) => {
      this.items = data;
    });
  }
  getDisplayedQuantity(): number {
    return this.quantityService.getQuantity();
  }

  redirectToDescription(item: any) {
    const queryParams = {
      param1: item.id,
    };

    this.router.navigate([`/description/${item.id}`]);
  }

  updateQuantity(quantity: any, id: any) {
    if (id !== -1) {
      this.items[id].quantity = quantity;

      this.http
        .patch(` http://localhost:3000/items/${id + 1}`, this.items[id])
        .subscribe((response) => {
          console.log('Item updated successfully on the server:', response);
        });
    }
  }

  // addToCart(productQuantity: number){
  //   const currentCart = this.cartSubject.value;
  //   currentCart.push(productQuantity);
  //   this.cartSubject.next(currentCart);
  // }
  
}
