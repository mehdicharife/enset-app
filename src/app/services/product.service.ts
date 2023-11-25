import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product.model";

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private httpClient : HttpClient;
  constructor(httpClient : HttpClient) {
    this.httpClient = httpClient;
  }

  public getProducts() : Observable<Array<Product>> {
    return this.httpClient.get<Array<Product>>("http://localhost:8089/products");
  }

  public checkProduct(product : Product) {
    return this.httpClient.patch<Product>(`http://localhost:8089/products/${product.id}`,
      {checked : !product.checked}
    );
  }

  public deleteProduct(product : Product) {
    return this.httpClient.delete(`http://localhost:8089/products/${product.id}`)
  }

  public saveProduct(product : Product) : Observable<Product> {
    return this.httpClient.post<Product>("http://localhost:8089/products/", product);
  }

  public searchProducts(keyword : string) : Observable<Array<Product>> {
    return this.httpClient.get<Array<Product>>(`http://localhost:8089/products?name_like=${keyword}`);
  }

  public getProductsPage(page:number, pageSize:number) : Observable<HttpResponse<Array<Product>>> {
    return this.httpClient.get<Array<Product>>(`http://localhost:8089/products?_page=${page}&_limit=${pageSize}`,
                            {observe: 'response'});
  }

  public getNthPageOfKeywordMatchingProducts(keyword:string, pageIndex:number, productPerPageCount:number) : Observable<HttpResponse<Array<Product>>> {
    return this.httpClient.get<Array<Product>>(`http://localhost:8089/products?name_like=${keyword}&_page=${pageIndex}&_limit=${productPerPageCount}`,
      {observe : 'response'});
  }
}
