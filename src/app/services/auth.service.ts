import { Injectable } from '@angular/core';
import {ErrorHandler} from "../ErrorHandlers/methodErrorHandler";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute,Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient,private _ActivatedRoute:ActivatedRoute,private _Router:Router) { }


  _registerUrl = `http://localhost:3000/auth/register`;
  _loginUrl = `http://localhost:3000/auth/login`;
  _userUrl = `http://localhost:3000/auth/current-user`;
  _profileUrl = `http://localhost:3000/profile`;
  private _usersURL = `http://localhost:3000/auth/system-users`;
  private _userDataURL = `http://localhost:3000/auth/user-main-data`;

  errorsHandler = new ErrorHandler();
  public name: string="";
  public email: string="";
  public isLogin=false;
  registerUser(registrationInfo:any): Observable<void> {
    return this._HttpClient.post<void>("https://clothes-online-shopping.herokuapp.com/user/register", registrationInfo);
  }

  login(user: any): Observable<any> {
    //this.isLogin=true;
    return this._HttpClient.post<any>("https://clothes-online-shopping.herokuapp.com/user/login", user);
  }

  updateProfile(updateForm:any): Observable<any> {
    return this._HttpClient.put<any>(
      'https://clothes-online-shopping.herokuapp.com/user/profile',
      updateForm,{headers: {'Authorization':`Bearer ${localStorage.getItem('token')}`, 'Content-Type':'application/json'}}
    );
  }








  // prepareUserData() {
  //   if (this.isLoggedIn()) {
  //     this.getCurrentUser().subscribe(resUser => {
  //       this.currentUser = resUser;
  //     });
  //     this.pUserData().subscribe(uData => {
  //       this.profile = uData.profile;
  //       this.username = `${uData.profile.firstname}
  //       ${uData.profile.lastname}`;
  //     });
  //   }
  // }

  // refreshInfo() {
  //   if (this.isLoggedIn()) {
  //     this.pUserData().subscribe(uData => {
  //       this.profile = uData.profile;
  //       this.cart = uData.cart;
  //       this.cartItem = uData.cartItem;
  //     });
  //   }
  // }

  // pUserData(): Observable<UserData> {
  //   try {
  //     return this.http.get<UserData>(this._userDataURL);
  //   } catch (err) {
  //     this.errorsHandler.handleError(err);
  //   }
  // }

  // messageContact(messageForm: any): Observable<void> {
  //   try {
  //     return this.http.post<void>(this.contactUrl, messageForm);
  //   } catch (err) {
  //     this.errorsHandler.handleError(err);
  //   }
  // }



  // getCurrentUser(): Observable<User> {
  //   try {
  //     return this.http.get<User>(`${this._userUrl}`);
  //   } catch (err) {
  //     this.errorsHandler.handleError(err);
  //   }
  // }


  //
  // getUsers(): Observable<User[]> {
  //   try {
  //     return this.http.get<User[]>(this._usersURL);
  //   } catch (err) {
  //     this.errorsHandler.handleError(err);
  //   }
  // }



  // getUserProfile(): Observable<Profile> {
  //   try {
  //     return this.http.get<Profile>(this._profileUrl);
  //   } catch (err) {
  //     this.errorsHandler.handleError(err);
  //   }
  // }

  userLogout() {
    return localStorage.removeItem("token");
  }

  isLoggedIn() {
    return !!localStorage.getItem("token");
  }

  getToken() {
    return localStorage.getItem("token");
  }
}
