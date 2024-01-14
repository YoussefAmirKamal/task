import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartsService {
  constructor(private http: HttpClient) {}
  getAllCarts() {
    return this.http.get('https://fakestoreapi.com/carts');
  }
}
