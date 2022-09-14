import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  name:string="";
  email:string="";
  checkMatch=true;

  constructor(private _AuthService:AuthService) {
    this.name=JSON.stringify(localStorage.getItem('name'));
    this.name=this.name.substring(1,this.name.length-1);
    this.email=JSON.stringify(localStorage.getItem('email'));
    this.email=this.email.substring(1,this.email.length-1);
  }
  profileForm:any=new FormGroup({
    name: new FormControl(JSON.stringify(localStorage.getItem('name')).substring(1,JSON.stringify(localStorage.getItem('name')).length-1)),
    email: new FormControl(JSON.stringify(localStorage.getItem('email')).substring(1,JSON.stringify(localStorage.getItem('email')).length-1)),
    password: new FormControl(),
    confirmPassword:new FormControl()
  });
  ngOnInit(): void {

  }

  updateData() {
    console.log(this.profileForm.value.name ) ;
    if(this.profileForm.value.password!==this.profileForm.value.confirmPassword) {this.checkMatch=false;this.profileForm.setErrors({ notMatched: true });}
    else{
      this.checkMatch=true;
      this._AuthService.updateProfile(this.profileForm.value).subscribe((data)=>{
            this.profileForm.setErrors({ successfully: true });
      }, error => {
            this.profileForm.setErrors({ unauthenticated: true });
      }
      );
    }


  }
}
