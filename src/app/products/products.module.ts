import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './allcomponents/all-products/all-products.component';
import { ProductDetailsComponent } from './allcomponents/product-details/product-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './allcomponents/product/product.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    AllProductsComponent,
    ProductDetailsComponent,
    ProductComponent,
  ],
  imports: [CommonModule, BrowserModule, SharedModule, RouterLink],
})
export class ProductsModule {}
