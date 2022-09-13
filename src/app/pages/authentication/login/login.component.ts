import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {AlertService} from "../../../services/alert.service";
import {User} from "../../../interfaces/user";
import {NavBarComponent} from "../../../common/nav-bar/nav-bar.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:any=new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  isLogin=false;
  unauthenticated=false;
  @ViewChild('invalidCredentials', {static: true}) invCredentials: TemplateRef<any> | undefined;
  authCredentialsDto: any;
  user:any;
  name="";
  email="";

  constructor(public authService: AuthService,
              private router: Router,
              private fb: FormBuilder,
              private alertService: AlertService,
              ) {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit(): void {

  }


  userLogin() {
    if(!localStorage.getItem("name")){
      localStorage.setItem("name", "");
    }
    if(!localStorage.getItem("email")){
      localStorage.setItem("email", "");
    }

    this.authService.login(this.loginForm.value).subscribe(
      res => {
        localStorage.setItem("token", res.token);
        this.isLogin=true;
        localStorage.setItem('userLogin','true')
        console.log(this.loginForm.value);
        this.authService.name=res.name;
        this.authService.email=res.email;
        localStorage.setItem("name", res.name);
        localStorage.setItem("email", res.email);
        this.isLogin=true;
        this.name=this.authService.name;
        this.router.navigate(['/home'])
          .then(() => {
            window.location.reload();
          });
      },
      error => {
        this.loginForm.setErrors({ unauthenticated: true });
      }
    );


  }

  hide() {

  }
}
