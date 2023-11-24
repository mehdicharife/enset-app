import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductService} from "../../services/product.service";
import {Product} from "../../model/product.model";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  products : Array<Product> = [];
  private productService : ProductService;

  constructor(productService : ProductService) {
    this.productService = productService;
  }

  ngOnInit() {
    this.setProducts();
  }

  setProducts() {
    this.productService.getProducts().subscribe({
      next : value => this.products = value,
      error : err => console.log(err)
    });
  }

  onProductCheck(product : Product) {
    this.productService.checkProduct(product).subscribe({
      next : value => this.products.filter(product => product.id == value.id).
                                             map(element => element.checked = value.checked),
      error : err => console.log(err)
    });
  }

  handleProductDelete(product: Product) {
    this.productService.deleteProduct(product).subscribe({
      next : value => {this.products = this.products.filter(element => element.id != product.id)}
    });
  }
}
