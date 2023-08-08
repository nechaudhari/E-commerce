import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuantityService {
  private quantity: number = 0;
  getQuantity(): number {
    return this.quantity;
  }

  setQuantity(newQuantity: number): void {
    this.quantity = newQuantity;
  }
}
