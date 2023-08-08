import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemDescriptionComponent } from './item-description/item-description.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'description/:productId', component: ItemDescriptionComponent },
  { path: 'products', component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
