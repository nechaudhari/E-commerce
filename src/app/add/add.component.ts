import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { QuantityService } from '../quantity.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @Input() inputnumber: number = 0;
  @Output() inputnumberChange = new EventEmitter<number>();
  @Input() quantity!: number;
  items: any[] = [];
  index: any;
  removeCart = false;

  constructor() {}

  ngOnInit() {
    this.addToQuantity(this.quantity);
  }

  addToQuantity(amount: number): void {
    this.inputnumber += amount;
    // this.inputnumberChange.emit(this.inputnumber);
    // this.quantityService.localAddToCart(/* pass your product data here */);
  }

  plus() {
    this.inputnumber++;
    this.inputnumberChange.emit(this.inputnumber);
    // this.quantityService.localAddToCart(/* pass your product data here */);
  }

  minus() {
    if (this.inputnumber !== 0) {
      this.inputnumber--;
      this.inputnumberChange.emit(this.inputnumber);
      // this.quantityService.removeItemFromCart(/* pass your product id here */);
    }
  }
}
