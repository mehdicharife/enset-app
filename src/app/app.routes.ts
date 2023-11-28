import {Route, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ProductsComponent} from "./components/products/products.component";
import {NewProductComponent} from "./components/new-product/new-product.component";

export const routes: Route[] = [
  {path: 'navbar',
    loadComponent: () => import("./components/navbar/navbar.component").then(mod => mod.NavbarComponent),
    children: [
      {path: 'products', loadComponent: () => import("./components/products/products.component").then(mod => mod.ProductsComponent)},
      {path: 'new-product', loadComponent: () => import("./components/new-product/new-product.component").then(mod => mod.NewProductComponent)},
      {path: 'home', loadComponent: () => import("./components/home/home.component").then(mod => mod.HomeComponent)}
    ]
  },
  /*{path: 'home', loadComponent: () => import("./components/home/home.component").then(mod => mod.HomeComponent)},
  {path: 'products', loadComponent: () => import("./components/products/products.component").then(mod => mod.ProductsComponent)},
  {path: 'new-product', loadComponent: () => import("./components/new-product/new-product.component").then(mod => mod.NewProductComponent)},*/
  {path: 'product-edit/:id', loadComponent: () => import("./components/product-edit/product-edit.component").then(mod => mod.ProductEditComponent)},
  {path: 'login', loadComponent: () => import("./components/login/login.component").then(mod => mod.LoginComponent)},
  {path: '', loadComponent: () => import("./components/login/login.component").then(mod => mod.LoginComponent)},
  {path: 'home', loadComponent: () => import("./components/home/home.component").then(mod => mod.HomeComponent)}

];
