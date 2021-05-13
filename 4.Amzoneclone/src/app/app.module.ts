import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { HeaderComponent } from './componenet/header/header.component';
import { FooterComponent } from './componenet/footer/footer.component';
import { BannerComponent } from './componenet/banner/banner.component';
import { ProductsComponent } from './componenet/products/products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { CheckoutComponent } from './page/checkout/checkout.component';
import { CheckoutProductComponent } from './componenet/checkout-product/checkout-product.component';
import { CheckoutSubtotalComponent } from './componenet/checkout-subtotal/checkout-subtotal.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    BannerComponent,
    ProductsComponent,
    CheckoutComponent,
    CheckoutProductComponent,
    CheckoutSubtotalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
