import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CartComponent} from "../user-cart/cart/cart.component";
import {CheckoutComponent} from "../user-cart/checkout/checkout.component";
import {PaymentComponent} from "../user-cart/payment/payment.component";
import {ProductsComponent} from "./products/products.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {MenComponent} from "./products/men/men.component";
import {WomenComponent} from "./products/women/women.component";
import {SpinnerModule} from "primeng/spinner";

const routes: Routes = [
  {path:'', component:ProductsComponent},
  {path:'products', component:ProductsComponent},
  {path:'productDetails/:id', component:ProductDetailsComponent},
  {path:'men', component:MenComponent},
  {path:'women', component:WomenComponent},
]
@NgModule({
  imports: [RouterModule.forChild(routes),SpinnerModule],
  exports: [RouterModule,SpinnerModule]
})
export class ShopRoutingModule { }
