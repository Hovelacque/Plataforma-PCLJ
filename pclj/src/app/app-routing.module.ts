import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { ChangeAvatarComponent } from './change-avatar/change-avatar.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { CreateOrEditProjetosComponent } from './projetos/create-or-edit-projetos/create-or-edit-projetos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AppRouteGuard } from '@shared/auth/auth-route-guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AppComponent,
        children: [
          { path: 'home', component: HomeComponent, canActivate: [AppRouteGuard] },
          { path: 'change-avatar', component: ChangeAvatarComponent, canActivate: [AppRouteGuard] },
          { path: 'projetos', component: ProjetosComponent, canActivate: [AppRouteGuard] },
          { path: 'create-or-edit-projeto', component: CreateOrEditProjetosComponent, canActivate: [AppRouteGuard] },
          { path: 'usuarios', component: UsuariosComponent, canActivate: [AppRouteGuard] },

          { path: 'dashboard', component: DashboardComponent, canActivate: [AppRouteGuard] },
          { path: 'table', component: TableComponent, canActivate: [AppRouteGuard] },
          { path: 'drag-drop', component: DragDropComponent, canActivate: [AppRouteGuard] },
          { path: 'address-form', component: AddressFormComponent, canActivate: [AppRouteGuard] },

          { path: '',   redirectTo: 'home', pathMatch: 'full' }, // redirect to `home`
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
