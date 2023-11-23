import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'enset-app';
  subject = "darkness my old friend";
  navButtons: Array<any> = [
    {title: "Home", route: "/home", icon: "house"},
    {title: "Products", route: "/products", icon: "search"},
    {title: "New Product", route: "/new-product", icon: "safe"}
  ];
}
