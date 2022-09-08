import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private _HttpClient:HttpClient) { }
  getProducts():Observable<any>{
    return this._HttpClient.get("https://clothes-online-shopping.herokuapp.com/api/product/getProducts",{headers: {'Authorization':`Bearer ${localStorage.getItem('token')}`}});
  }

  getCategoryProducts(selectedCategory:string):Observable<any>{
    return this._HttpClient.get("https://clothes-online-shopping.herokuapp.com/api/product/getProductByCategory/"+selectedCategory,{headers: {'Authorization':`Bearer ${localStorage.getItem('token')}`}});
  }

  addItem(product: any): Observable<any> {
    return this._HttpClient.post<any>(
      "https://clothes-online-shopping.herokuapp.com/api/product/addNewProduct",
      JSON.stringify(product),
      this.httpOptions
    );
  }
}
