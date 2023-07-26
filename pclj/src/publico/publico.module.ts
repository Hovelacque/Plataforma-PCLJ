import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicoRoutingModule } from './publico-routing.module';

import { PublicoComponent } from './publico.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    PublicoComponent
  ],
  imports: [
    CommonModule,    
    PublicoRoutingModule,

    MatButtonModule,
  ]
})
export class PublicoModule { }
