import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Product} from "../../model/product.model";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent implements OnInit{
  productForm! : FormGroup;
  private formBuilder : FormBuilder;
  private productService : ProductService;

  constructor(formBuilder : FormBuilder, productService : ProductService) {
    this.formBuilder = formBuilder;
    this.productService = productService;
  }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      name : this.formBuilder.control('', [Validators.required]),
      price : this.formBuilder.control('', [Validators.required]),
      checked : this.formBuilder.control(false, [Validators.required])
    });
  }

  public saveProduct() {
    let product : Product = this.productForm.value;
    this.productService.saveProduct(product).subscribe({
      next : value => { alert(JSON.stringify(value)) },
      error : err => { console.log(err) }
    });
  }

}
