import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyserviceService } from './my-service.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent {
  products: any[] = [];
  Categories: any[] = [];
  option: any;
  cartProducts: any[] = [];
  @Output() item = new EventEmitter();
  base64: any = '';
  form!: FormGroup;

  constructor(private service: MyserviceService, private build: FormBuilder) {}
  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
    this.form = this.build.group({
      title: [' ', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
      category: ['', [Validators.required]],
    });
  }
  getProducts() {
    this.service.getAllProducts().subscribe((res: any) => {
      this.products = res;
    });
  }

  getCategories() {
    this.service.getAllCategories().subscribe((res: any) => {
      this.Categories = res;
    });
  }

  filterCategory(event: any) {
    let value = event.target.value;
    value == 'all' ? this.getProducts() : this.getProductsCategory(value);
  }
  getProductsCategory(keyword: string) {
    this.service.getProductsByCategory(keyword).subscribe((res: any) => {
      this.products = res;
    });
  }
  addToCart(event: any) {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
      let exist = this.cartProducts.find(
        (item) => item.item.id == event.item.id
      );
      if (exist) {
        alert('products is already in your cart');
      } else {
        this.cartProducts.push(event);
        localStorage.setItem('cart', JSON.stringify(this.cartProducts));
      }
      this.cartProducts.push(event);
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    } else {
      this.cartProducts.push(event);
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    }
  }
  getSelectedCategory(event: any) {
    this.form.get('category')?.setValue(event.target.value);
  }
  getImagePath(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.base64 = reader.result;
      this.form.get('image')?.setValue(this.base64);
    };
  }
  addProduct() {
    const model = this.form.value;
    this.service.createProduct(model).subscribe(() => {
      alert('Add Product Success');
    });
  }
  update(item: any) {
    debugger;
    this.form.get('title')?.setValue(item.title);
    this.form.get('description')?.setValue(item.description);
    this.form.get('category')?.setValue(item.category);
    this.form.get('price')?.setValue(item.price);
    this.form.get('title')?.setValue(item.title);
    this.form.get('image')?.setValue(item.image);
  }
}
