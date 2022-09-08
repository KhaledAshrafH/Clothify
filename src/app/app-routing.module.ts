import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutUsComponent} from "./pages/about-us/about-us.component";
import {ContactUsComponent} from "./pages/contact-us/contact-us.component";
import {MyAccountComponent} from "./pages/my-account/my-account.component";
import {HomeComponent} from "./pages/home/home.component";
import {SpinnerComponent} from "./common/spinner/spinner.component";
import {SpinnerModule} from "primeng/spinner";
import {AuthGuardGuard} from "./guards/auth-guard.guard";
import {AdminComponent} from "./Admin/admin/admin.component";
import {CreateComponent} from "./Admin/create/create.component";

const routes: Routes = [

  { path: 'about', component:AboutUsComponent},
  { path: 'admin', component:AdminComponent},
  { path: 'create', component:CreateComponent},
  { path: 'contactus', component:ContactUsComponent},
  { path: 'account', component:MyAccountComponent, canActivate: [AuthGuardGuard]},
  { path: 'home', component:HomeComponent},
  { path: 'auth',  loadChildren: () => import('./pages/authentication/authentication.module').then(m => m.AuthenticationModule)},
  { path: 'shop',  loadChildren: () => import('./pages/shop/shop.module').then(m => m.ShopModule)},
  { path: 'user-cart',  loadChildren: () => import('./pages/user-cart/user-cart.module').then(m => m.UserCartModule)},
  { path: '**',  redirectTo:'home', pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,SpinnerModule]
})
export class AppRoutingModule { }
