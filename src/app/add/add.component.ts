import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  @Input() inputnumber: number = 0;
  @Output() inputnumberChange = new EventEmitter<number>();
  @Input() quantity!:number;

  ngOnInit(){
    this.addToQuantity(this.quantity);
  }
  addToQuantity(amount: number): void {
    this.inputnumber += amount;
    // this.inputnumberChange.emit(this.inputnumber);
  }

  plus() {
    this.inputnumber++;
    this.inputnumberChange.emit(this.inputnumber);
  }

  minus() {
    if (this.inputnumber !== 0) {
      this.inputnumber--;
      this.inputnumberChange.emit(this.inputnumber);
    }
  }
}
