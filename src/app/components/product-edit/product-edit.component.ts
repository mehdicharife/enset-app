import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent implements OnInit {
  private activatedRoute : ActivatedRoute;
  public productId! : number;

  constructor(activatedRouter : ActivatedRoute) {
    this.activatedRoute = activatedRouter;
  }

  ngOnInit() {
    this.productId = this.activatedRoute.snapshot.params['id'];
  }

}
