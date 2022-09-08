import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductServiceService} from "../../../services/product-service.service";
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  allData=[];
  cartProducts:any=[];
  cartQuantity:any=[];
  added=-1;
  addButton:boolean=false;
  loading:boolean=false;
  amount: number=0;
  viewSelector:boolean=true;
  clothesType: string ="All Clothes";
  constructor(private _ProductServiceService:ProductServiceService,private _CartService:CartService) {

    this.getProducts();
  }

  ngOnInit(): void {

  }
  getProducts(){
    this.loading=true;
    this._ProductServiceService.getProducts().subscribe((data)=>{
        this.allData=data;
        this.loading=false;
      },
      (error)=>{
        alert(error);
        this.loading=false;
      });
  }


  selectCategory(event:any){
    let selectedCategory = event.target.value;
    console.log(selectedCategory);
    if(selectedCategory==='All Clothing' || selectedCategory==='Choose Specific Category') {this.getProducts();this.clothesType="All Clothes";}
    else {
      this.getCategoryProducts(selectedCategory);
      if(selectedCategory==="MEN") this.clothesType="Men's Clothes";
      else this.clothesType="Women's Clothes";
    }
  }

  getCategoryProducts(selectedCategory:string){
    this.loading=true;
    this._ProductServiceService.getCategoryProducts(selectedCategory).subscribe((data)=>{
      this.allData=data;
      this.loading=false;
    });
  }
  addToCart(index: number) {
    this.added=index;
    if(!localStorage.getItem("cart")){
      localStorage.setItem("cart", "[]");
    }
    if(!localStorage.getItem("cartQ")){
      localStorage.setItem("cartQ", "[]");
    }
    let cart = JSON.parse(localStorage.getItem("cart")!);
    let cartQ = JSON.parse(localStorage.getItem("cartQ")!);
    if(cart.length == 0){
      cart.push(this.allData[this.added]);
      cartQ.push(this.amount);
    }else{
      let check:boolean=false;
      for(let i=0;i<cart.length;i++){
        if(cart[i].id===this.allData[this.added]['id']) check=true;
      }
      if(!check){
        cart.push(this.allData[this.added]);
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


}
