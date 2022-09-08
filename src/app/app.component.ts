import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-Commerce';


  CustomerStatus: string = 'unknown' //initially
  constructor( private _router: Router) //injecting router service
  {

    ////GUARD.
    // _router.events.subscribe(
    //   (e) => { //arrow function to pass events of guard to the variable
    //     if (e instanceof NavigationStart) //if event type is started
    //     {
    //       let url: string = e.url.toString()
    //
    //       if (this._loginService.CheckUserLogin()) {
    //         //logged in
    //
    //         if (url.includes('login')) {
    //           this._router.navigate(['home']);
    //         }
    //       }
    //       else {
    //         //not logged in yet
    //         if (!url.includes('auth') ) {
    //           this._router.navigate(['/auth/']);
    //         }
    //
    //         else if(!url.includes('')) {
    //           alert("You Should Login before use my website.")
    //         }
    //       }
    //     }
    //   }
    // )
  }

  ngOnInit(): void {
   // this.CustomerStatus = (this._loginService.CheckUserLogin()) ? 'Login' : 'not Authorized'


  }


}

