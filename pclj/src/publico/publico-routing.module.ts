import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PublicoComponent } from './publico.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: PublicoComponent,
        children: [
          { path: '', component: HomeComponent },
          { path: 'login', component: LoginComponent }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class PublicoRoutingModule { }
