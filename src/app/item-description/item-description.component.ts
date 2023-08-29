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
  index:any;
  removeCart = false;

  constructor(private http: HttpClient, private router: Router , private activeRoute:ActivatedRoute,private quantityService: QuantityService) {}

  ngOnInit() {
    this.loadItems(); 
  
    let productId = this.activeRoute.snapshot.paramMap.get('productId'); // Retrieve productId from route parameters
    let cartData = localStorage.getItem('localCart');
    
    if (productId && cartData) {
      let items: any[] = JSON.parse(cartData);
      items = items.filter((item: any) => productId === item.id.toString());
      this.removeCart = items.length > 0;
    } 
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
     this.index= this.items.findIndex(item => item.id === this.items[0].id);
      this.items[id].quantity = quantity;
      
      this.http.patch(` http://localhost:3000/items/${this.items[0].id}`,this.items[id]).subscribe(response => {
        console.log('Item updated successfully on the server:', response);
      });
    }
    }

    AddToCart(item:any) {
      if (this.items && this.items.length > 0 && item.quantity > 0) {
        this.items[0].pquantity = this.quantity; 
        this.quantityService.localAddToCart(this.items[0]); 
        this.removeCart = true;
      }
      else{
        alert("Please add the quantity")
      }
    }

    RemoveToCart(ProductId:number){
      this.quantityService.removeItemFromCart(ProductId);
      this.removeCart = false;
    }
}
