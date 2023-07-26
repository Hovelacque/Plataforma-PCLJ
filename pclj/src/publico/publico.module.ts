import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicoRoutingModule } from './publico-routing.module';

import { PublicoComponent } from './publico.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    PublicoComponent
  ],
  imports: [
    CommonModule,
    PublicoRoutingModule,

    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
  ]
})
export class PublicoModule { }
