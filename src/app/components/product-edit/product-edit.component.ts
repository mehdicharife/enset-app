import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent implements OnInit {
  private productService : ProductService;
  private activatedRoute : ActivatedRoute;
  public productEditForm! : FormGroup;
  public formBuilder : FormBuilder;
  public productId! : number;

  constructor(productService : ProductService, activatedRouter : ActivatedRoute, formBuilder : FormBuilder) {
    this.activatedRoute = activatedRouter;
    this.productService = productService;
    this.formBuilder = formBuilder;
  }

  ngOnInit() {
    this.productId = this.activatedRoute.snapshot.params['id'];
    this.productService.getProductById(this.productId)
      .subscribe({
        next : value => {
          this.productEditForm  = this.formBuilder.group({
            id : this.formBuilder.control(value.id),
            name : this.formBuilder.control(value.name, Validators.required),
            price : this.formBuilder.control(value.price, Validators.min(100)),
            checked : this.formBuilder.control(value.checked, Validators.required)
          })
        },

        error : err => { console.log(err) }
      });
  }

  updateProduct() {
    this.productService.updateProduct(this.productEditForm.value)
      .subscribe({
        next : product => { alert(JSON.stringify(product))},
        error : err => { console.log(err) }
      });
  }


}
