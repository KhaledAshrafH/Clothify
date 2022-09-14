import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataViewModule} from 'primeng/dataview';

import { ShopRoutingModule } from './shop-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MenComponent } from './products/men/men.component';
import { WomenComponent } from './products/women/women.component';
import {FormsModule} from "@angular/forms";
import {Ng2SearchPipeModule} from "ng2-search-filter";



@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent,
    MenComponent,
    WomenComponent
  ],
    imports: [
        CommonModule,
        ShopRoutingModule,
        DataViewModule,
        FormsModule,
        Ng2SearchPipeModule
    ]
})
export class ShopModule { }
