import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private httpClient : HttpClient;
  constructor(httpClient : HttpClient) {
    this.httpClient = httpClient;
  }

  public getProducts() : Observable<Array<any>> {
    return this.httpClient.get<Array<any>>("http://localhost:8089/products");
  }

  public checkProduct(product : any) {
    return this.httpClient.patch<any>(`http://localhost:8089/products/${product.id}`,
      {checked : !product.checked}
    );
  }
}
