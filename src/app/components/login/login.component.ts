import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";
import {firstValueFrom} from "rxjs";

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
  private authService : AuthenticationService;
  private router : Router;

  constructor(formBuilder : FormBuilder, authService : AuthenticationService, router : Router) {
    this.formBuilder = formBuilder;
    this.authService = authService;
    this.router = router;
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username : this.formBuilder.control("", Validators.required),
      password : this.formBuilder.control("", Validators.required)
    });
  }

  async login() {
    await this.authService.login(this.loginForm.value.username, this.loginForm.value.password);
    if(this.authService.isAuthenticated) {
      await this.router.navigateByUrl('/navbar');
    } else {
      alert("Bad credentials!");
    }
  }

}
