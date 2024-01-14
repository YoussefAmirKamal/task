import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './allComponents/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

import { SelectComponent } from './allComponents/select/select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartsModule } from '../carts/carts.module';
import { FooterComponent } from './allComponents/footer/footer.component';
import { ProductsModule } from '../products/products.module';

@NgModule({
  declarations: [HeaderComponent, SelectComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    CartsModule,
  ],
  exports: [
    HeaderComponent,
    SelectComponent,
    FormsModule,
    ReactiveFormsModule,
    FooterComponent,
  ],
})
export class SharedModule {}
