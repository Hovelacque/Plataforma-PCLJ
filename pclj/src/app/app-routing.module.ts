import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { AddressFormComponent } from './address-form/address-form.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AppComponent,
        children: [
          { path: 'home', component: HomeComponent },
          { path: 'dashboard', component: DashboardComponent },
          { path: 'table', component: TableComponent },
          { path: 'drag-drop', component: DragDropComponent },
          { path: 'address-form', component: AddressFormComponent },
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
