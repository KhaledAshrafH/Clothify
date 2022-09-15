import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register: any=[];
  email:any=[];
  state:any;
  Submit(register: any){
    console.log("form is submitted", register)
  }
  regForm:any;
  states = [
    "Cairo", "Alexandria"
  ];
  registerForm:any=new FormGroup ({
    // 'name' : new FormControl (''),
    // 'userName' : new FormControl (''),
    // 'email' : new FormControl (''), //2nd validator is to check whether it is an email or not
    // 'password' : new FormControl (''),
    // 'gender': new FormControl(''),
    // 'phoneNum' : new FormControl (''),
    // 'city': new FormControl(''),
    // 'address' : new FormControl (''),
    'name' : new FormControl ('', Validators.required),
    'userName' : new FormControl ('', Validators.required),
    'email' : new FormControl ('', [Validators.required, Validators.email]), //2nd validator is to check whether it is an email or not
    'password' : new FormControl ('', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$')]),
    'gender': new FormControl(''),
    'phoneNum' : new FormControl (20,[Validators.required,Validators.pattern('^01[0-2,5]{1}[0-9]{8}$')] ),
    'city': new FormControl(''),
    'address' : new FormControl ('', [Validators.required, Validators.minLength(10)]),
  });
  constructor(private _AuthService:AuthService,private _Router:Router) { }

  ngOnInit(): void {

  }

  userRegister() {
    console.log(this.registerForm.value);
    this._AuthService.registerUser(this.registerForm.value).subscribe((data)=>{
      this.state=data;
      this._Router.navigate(['/home'])
    },error =>{
      this.registerForm.setErrors({ AlreadyExist: true });
    });

  }
}
