import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public numOfItemsAdded = 0;
  //public userLogin:boolean=true;
  public userLogin: string = JSON.stringify(localStorage.getItem('userLogin'));

  constructor(private _CartService: CartService, private _AuthService: AuthService, private _Router: Router) {
    if(localStorage.getItem('cartQ'))
    this.numOfItemsAdded = JSON.parse(localStorage.getItem('cartQ')!).length;
    console.log(this.userLogin.length);
    console.log(localStorage.getItem('token'));
  }

  ngOnInit(): void {
  }

  itemsChanged() {
    this.numOfItemsAdded = JSON.parse(localStorage.getItem('cartQ')!).length;
  }

  checkLogin() {
    return localStorage.getItem("userLogin") !== null;
  }

  pressLogin() {
    // this._LoginService.setIsLogin();
    // this.userLogin=true;


  }

  logout() {
    this._AuthService.userLogout();
    this._AuthService.name = "";
    this._AuthService.email = "";
    localStorage.setItem('userLogin', "");
    localStorage.setItem('name', "");
    localStorage.setItem('email', "");
    this.userLogin = "";
    localStorage.clear();
    this._Router.navigate(['/home'])
      .then(() => {
        window.location.reload();
      });
  }
}
