import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductService} from "../../services/product.service";
import {Product} from "../../model/product.model";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  private productService : ProductService;
  products : Array<Product> = [];

  public productPerPageCount : number = 4;
  public pagesCount : number = 1;
  public currentPage : number = 1;

  public keyword : string = "";

  constructor(productService : ProductService) {
    this.productService = productService;
  }

  ngOnInit() {
    this.setProductsFromPage(1, this.productPerPageCount);
  }

  setProductsFromPage(page: number, pageSize: number) {
    this.setProductsFromKeywordMatchingProductsPage("", page, pageSize);
  }
  setProductsFromKeywordMatchingProductsPage(keyword:string, page:number, pageSize:number) {
    this.productService.getNthPageOfKeywordMatchingProducts(keyword, page, pageSize).subscribe({
      next : (response) => {
        this.products = response.body as Product[];
        this.pagesCount = Math.ceil(parseInt(response.headers.get('x-total-count') as string) / this.productPerPageCount);
      },
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

  searchProducts() {
    this.productService
      .getNthPageOfKeywordMatchingProducts(this.keyword, 1, this.productPerPageCount)
      .subscribe({
      next : value => { this.products = value.body as Product[] },
      error : err => { console.log(err) }
    })
  }

  switchToProductsPage(pageIndex : number) {
    this.setProductsFromKeywordMatchingProductsPage(this.keyword, pageIndex, this.productPerPageCount)
    this.currentPage = pageIndex;
  }
}
