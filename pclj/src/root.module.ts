import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RootRoutingModule } from './root-routing.module';

import { RootComponent } from './root.component';

import { SharedModule } from '@shared/shared.module';

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
  providers: [],
  bootstrap: [RootComponent],
})
export class RootModule {}

