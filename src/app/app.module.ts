import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProductsModule } from './products/products.module';
import { CartsModule } from './carts/carts.module';
import { AllProductsComponent } from './products/allcomponents/all-products/all-products.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { UpdateProductComponent } from './update-product/update-product.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, UpdateProductComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    CommonModule,
    ProductsModule,
    CartsModule,
    NgApexchartsModule,
  ],
  exports: [ProductsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
