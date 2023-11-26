import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
    imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  navButtons: Array<any> = [
    {title: "Home", route: "/navbar/home", icon: "house"},
    {title: "Products", route: "/navbar/products", icon: "search"},
    {title: "New Product", route: "/navbar/new-product", icon: "safe"}
  ];

  lastClickedButton : any;

  setLastClickedButton(button : any) {
    this.lastClickedButton = button;
  }
}
