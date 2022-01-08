import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PublicServiceRoutingModule} from './public-service-routing.module';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {DevUIModule, LayoutModule} from "ng-devui";
import {ListComponent} from './pages/list/list.component';
import {HttpClientModule} from "@angular/common/http";
import {PublicServiceInterceptor} from "./interceptors/public-service.interceptor";
import {httpInterceptorProviders} from "./interceptors";


@NgModule({
  declarations: [
    HomepageComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    PublicServiceRoutingModule,
    DevUIModule,
    LayoutModule,
    HttpClientModule,

  ],
  providers: [
    httpInterceptorProviders
  ]
})
export class PublicServiceModule {
}
