import { EventEmitter, Injectable } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
}
@Injectable({
  providedIn: 'root'
})

export class QuantityService {
  private quantity: number = 0;
  cartData = new EventEmitter<Product[] | []>();
 

  getQuantity(): number {
    return this.quantity;
  }

  setQuantity(newQuantity: number): void {
    this.quantity = newQuantity;
  }

  localAddToCart(data: Product) { 
    let cartData = [];
    let localCart = localStorage.getItem('localCart');
    if (!localCart) {
      localStorage.setItem('localCart', JSON.stringify([data]));
    }
    else{
     cartData= JSON.parse(localCart);
     cartData.push(data)
     localStorage.setItem('localCart', JSON.stringify(cartData));
    }
    this.cartData.emit(cartData);
  }

  removeItemFromCart(productId:number){
    let cartData = localStorage.getItem('localCart');
    if(cartData){
      let items:Product[]= JSON.parse(cartData);
      items = items.filter((item:Product)=>productId!==item.id);
      localStorage.setItem('localCart', JSON.stringify(items));
      this.cartData.emit(items);
    }
  }

}
