import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public sizeOfList=0;

  public totalPrice:number=5;
  public itemAdded:any=[];
  public itemAddedQty:any=[];
  cartProducts: any;
  checkCalculated:boolean= false;
  constructor() {
    this.itemAdded=JSON.parse(localStorage.getItem('cart')!)
    this.itemAddedQty=JSON.parse(localStorage.getItem('cartQ')!);
    console.log(this.itemAdded);
  }

  ngOnInit(): void {
  }

  increaseQty(i: number) {
    this.itemAddedQty[i]++;
    this.checkCalculated=false;
    this.totalPrice=0;
  }

  decreaseQty(i: number) {
    this.itemAddedQty[i]--;
    this.checkCalculated=false;
    this.totalPrice=0;
  }


  calcPrice() {
    this.totalPrice=5;
    for(let i =0;i<this.itemAddedQty.length;i++){
      this.totalPrice += (this.itemAddedQty[i] * this.itemAdded[i]['price']);
      this.checkCalculated=true;
    }
    console.log(localStorage.getItem('token'));

  }


  removeItem(i: number) {
    this.itemAdded.splice(i,1);
    this.itemAddedQty.splice(i,1);
    localStorage.clear();
    localStorage.setItem("cart", JSON.stringify(this.itemAdded));
    localStorage.setItem("cartQ", JSON.stringify(this.itemAddedQty));
  }
}
