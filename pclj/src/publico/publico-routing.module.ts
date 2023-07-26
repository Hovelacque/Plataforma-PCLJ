import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PublicoComponent } from './publico.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: PublicoComponent,
        children: [
          // { path: 'home', component: HomeComponent }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class PublicoRoutingModule { }
