import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products : Array<any> = [
    {id: 1, name: "Computer", price: 5620, checked: false},
    {id: 2, name: "Printer", price: 2616, checked: false},
    {id: 3, name: "Camera", price: 6800, checked: false}
  ];
}
