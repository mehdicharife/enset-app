import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {ProductService} from "./services/product.service";
import {HttpClientModule, provideHttpClient} from "@angular/common/http";
import {AppComponent} from "./components/app.component";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
              provideHttpClient(),
              ProductService,
  ]
};
