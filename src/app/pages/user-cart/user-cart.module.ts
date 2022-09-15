import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCartRoutingModule } from './user-cart-routing.module';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    CartComponent,
    CheckoutComponent,
    PaymentComponent,
  ],
  imports: [
    CommonModule,
    UserCartRoutingModule,
  ]
})
export class UserCartModule { }
