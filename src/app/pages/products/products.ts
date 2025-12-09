import { Component } from '@angular/core';
import { Product, products } from '../../services/products';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  productos : Product[] = [];
  constructor(private product:products){
    this.productos = this.product.getProducts();
  }
}
