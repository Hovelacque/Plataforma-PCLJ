import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AppComponent,
        children: [
          { path: 'home', component: HomeComponent },
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
