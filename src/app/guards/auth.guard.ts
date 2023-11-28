import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthenticationService} from "../services/authentication.service";

export const authGuard: CanActivateFn = (route, state) => {
  if(!inject(AuthenticationService).isAuthenticated) {
    inject(Router).navigateByUrl('/login');
  }
  return true;
};
