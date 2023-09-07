import { ModuleWithProviders, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RootRoutingModule } from './root-routing.module';

import { RootComponent } from './root.component';

import { SharedModule } from '@shared/shared.module';
import { HttpClientInterceptor } from '@shared/service-proxies/http-client-interceptor';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientJsonpModule,
    HttpClientModule,
    RootRoutingModule,
    SharedModule.forRoot()
  ],
  declarations: [RootComponent],
  providers: [    
    { provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true }
  ],
  bootstrap: [RootComponent],
})
export class RootModule {}

