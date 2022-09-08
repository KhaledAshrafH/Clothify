import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from "../../../services/product-service.service";
import {ActivatedRoute} from "@angular/router";
import {ProductsComponent} from "../products/products.component";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id:number=0;
  item: any;
  added=-1;
  amount: number=0;
  cartProducts:any=[];
  cartQuantity:any=[];
  constructor(private _ProductServiceService:ProductServiceService,private _ActivatedRoute:ActivatedRoute) {
    // @ts-ignore
    this.id=this._ActivatedRoute.snapshot.paramMap.get("id");
    this._ProductServiceService.getProducts().subscribe((data)=>{
      this.item=data[(this.id as number)];
    });
  }

  addToCart(){
    this.added=(this.id as number);
    if(!localStorage.getItem("cart")){
      localStorage.setItem("cart", "[]");
    }
    if(!localStorage.getItem("cartQ")){
      localStorage.setItem("cartQ", "[]");
    }
    let cart = JSON.parse(localStorage.getItem("cart")!);
    let cartQ = JSON.parse(localStorage.getItem("cartQ")!);
    if(cart.length == 0){
      cart.push(this.item);
      cartQ.push(this.amount);
    }else{
      let check:boolean=false;
      for(let i=0;i<cart.length;i++){
        if(cart[i].id===this.item['id']) check=true;
      }
      if(!check){
        cart.push(this.item);
        cartQ.push(this.amount);
      }
      else {
        alert("Element already exist");
      }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("cartQ", JSON.stringify(cartQ));
    this.cartProducts=localStorage.getItem("cart");
    this.cartQuantity=localStorage.getItem("cartQ");
    localStorage.setItem("cart",this.cartProducts);
    localStorage.setItem("cartQ",this.cartQuantity);
    console.log(this.cartProducts);
    console.log(this.cartQuantity);

    this.amount=0;
  }
  ngOnInit(): void {
  }

}
