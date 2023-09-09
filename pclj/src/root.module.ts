import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RootRoutingModule } from './root-routing.module';

import { RootComponent } from './root.component';

import { SharedModule } from '@shared/shared.module';
import { HttpClientInterceptor } from '@shared/service-proxies/http-client-interceptor';
import { AppInitializer } from './app-initializer';

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
    { provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true },
    {
      provide: APP_INITIALIZER,
      useFactory: (appInitializer: AppInitializer) => appInitializer.init(),
      deps: [AppInitializer],
      multi: true,
    }
  ],
  bootstrap: [RootComponent],
})
export class RootModule { }

