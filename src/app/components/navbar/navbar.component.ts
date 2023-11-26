import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
    imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  navButtons: Array<any> = [
    {title: "Home", route: "/home", icon: "house"},
    {title: "Products", route: "/products", icon: "search"},
    {title: "New Product", route: "/new-product", icon: "safe"}
  ];

  lastClickedButton : any;

  setLastClickedButton(button : any) {
    this.lastClickedButton = button;
  }
}
