import { Component, OnInit } from '@angular/core';
import { CartsService } from '../../services/carts.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css'],
})
export class CartsComponent implements OnInit {
  constructor(private service: CartsService, private build: FormBuilder) {}
  carts: any[] = [];
  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.build.group({
      start: [''],
      end: [''],
    });
    this.getAllCarts();
  }
  getAllCarts() {
    this.service.getAllCarts().subscribe((res: any) => {
      this.carts = res;
    });
  }
  applyFilter() {
    console.log(this.form.value);
  }
}
