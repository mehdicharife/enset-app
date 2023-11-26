import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  public loginForm! : FormGroup;
  private formBuilder : FormBuilder;

  constructor(formBuilder : FormBuilder) {
    this.formBuilder = formBuilder;
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username : this.formBuilder.control("", Validators.required),
      password : this.formBuilder.control("", Validators.required)
    });
  }

  login() {

  }

}
