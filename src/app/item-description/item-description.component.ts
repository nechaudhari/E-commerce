import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuantityService } from '../quantity.service';

@Component({
  selector: 'app-item-description',
  templateUrl: './item-description.component.html',
  styleUrls: ['./item-description.component.css']
})
export class ItemDescriptionComponent {
  items: any[] = [];
  quantity: number = 0;
  
  constructor(private http: HttpClient, private router: Router , private activeRoute:ActivatedRoute,private quantityService: QuantityService) {}

  ngOnInit() {
    this.loadItems();
  }

  getDisplayedQuantity(): number {
    console.log(this.quantity);
    return this.quantityService.getQuantity();
  }

  loadItems() {
    let ProductId = this.activeRoute.snapshot.paramMap.get('productId');
    console.log("ProductId",ProductId)
    this.http.get<any[]>('http://localhost:3000/items').subscribe(data => {
      this.items = data.filter((elm)=> elm.id == ProductId);
    });
  }

  updateQuantity(quantity:any,id:any){
    
    if (id !== -1) {
     
      // Update the quantity of the item locally
      this.items[id].quantity = quantity;
      
      // Send a PUT request to update the item on the server
      this.http.patch(` http://localhost:3000/items/${id+1}`,this.items[id]).subscribe(response => {
        console.log('Item updated successfully on the server:', response);
      });
    }
    }
  

}
