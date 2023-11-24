import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  products : Array<any> = [];
  private httpClient : HttpClient;

  constructor(httpClient : HttpClient) {
    this.httpClient = httpClient;
  }

  ngOnInit() {
    this.httpClient.get<Array<any>>("http://localhost:8089/products").subscribe({
      next : value => this.products = value,
      error : err => console.log(err)
    });
  }

  onProductCheck(product : any) {
    this.httpClient.patch<any>(
      `http://localhost:8089/products/${product.id}`,
      {checked : !product.checked}
    ).subscribe({
      next : value => this.products.filter(product => product.id == value.id).map(element => element.checked = value.checked),
      error : err => console.log(err)
    });
  }
}
