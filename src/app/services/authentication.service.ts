import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {firstValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private accessToken! : string;
  public isAuthenticated : boolean = false;
  constructor(private httpClient : HttpClient) {};

  async login(email:string, password:string) {
    let response:any = await firstValueFrom(this.httpClient.post("http://localhost:8089/login", {email: email, password: password}));
    if(response.accessToken) {
      this.accessToken = response.accessToken;
      this.isAuthenticated = true;
    }

  }
}
