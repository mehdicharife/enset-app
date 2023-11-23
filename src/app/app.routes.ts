import {Route, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductsComponent} from "./products/products.component";
import {NewProductComponent} from "./new-product/new-product.component";

export const routes: Route[] = [
  {path: 'home', loadComponent: () => import("./home/home.component").then(mod => mod.HomeComponent)},
  {path: 'products', loadComponent: () => import("./products/products.component").then(mod => mod.ProductsComponent)},
  {path: 'new-product', loadComponent: () => import("./new-product/new-product.component").then(mod => mod.NewProductComponent)}
];
