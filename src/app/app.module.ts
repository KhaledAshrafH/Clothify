import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { FooterComponent } from './common/footer/footer.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { ShowPricePipe } from './pipes/show-price.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { BannerComponent } from './common/banner/banner.component';
import { HomeComponent } from './pages/home/home.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome"; // CLI imports AppRoutingModule
import {ReactiveFormsModule} from "@angular/forms";
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { SpinnerComponent } from './common/spinner/spinner.component';
import {FormsModule} from "@angular/forms";
import {TokenInterceptorService} from "./services/token-interceptor.service";
import { AdminComponent } from './Admin/admin/admin.component';
import { CreateComponent } from './Admin/create/create.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactUsComponent,
    NavBarComponent,
    FooterComponent,
    MyAccountComponent,
    ShowPricePipe,
    BannerComponent,
    HomeComponent,
    SpinnerComponent,
    AdminComponent,
    CreateComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule

  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptorService,
    //   multi: true
    // }

  ],
  exports: [
    SpinnerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
