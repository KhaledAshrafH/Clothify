import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Product } from "../interfaces/product";

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private apiServer = 'http://localhost:3003';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpclient: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.httpclient.get<Product[]>("https://clothes-online-shopping.herokuapp.com/api/product/getProducts",{headers: {'Authorization':`Bearer ${localStorage.getItem('token')}`}});
  }

  create(product: any): Observable<Product> {
    return this.httpclient.post<Product>(
      "https://clothes-online-shopping.herokuapp.com/api/product/addNewProduct",JSON.stringify(product),{headers: {'Authorization':`Bearer ${localStorage.getItem('token')}`, 'Content-Type':'application/json'}}
    );
  }

  update(product: any,id:string,): Observable<Product> {
    return this.httpclient.put<Product>(
      this.apiServer + '/products/'+id,
      JSON.stringify(product),

    ).pipe(catchError(this.errorHandler));
  }

  deleteItem(id: string) {
    return this.httpclient.delete<Product>(
      "https://clothes-online-shopping.herokuapp.com/api/product/deleteProduct/" + id,
      {headers: {'Authorization':`Bearer ${localStorage.getItem('token')}`, 'Content-Type':'application/json'}}
      )
  }

  getById(id: string): Observable<Product> {
    return this.httpclient.get<Product>(this.apiServer + '/products/' + id);
  }
  errorHandler(error: { error: { message: string; }; status: any; message: any; }){
    let errormsge='';
    if(error.error instanceof ErrorEvent){
      errormsge=error.error.message;
    }else{
      errormsge=`error code : ${error.status}\n Message:${error.message}`;
    }
    console.log(errormsge);
    return throwError(errormsge);
  }
}
