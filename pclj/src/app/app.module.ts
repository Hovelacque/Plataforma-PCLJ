import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatSliderModule } from '@angular/material/slider';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AddressFormComponent } from './address-form/address-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { ModalModule } from 'ngx-bootstrap/modal';

import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { ChangeAvatarComponent } from './change-avatar/change-avatar.component';
import { AvatarModule } from 'avatar-angular-kapibara';
import { ProjetosComponent } from './projetos/projetos.component';
import { CreateOrEditProjetosComponent } from './projetos/create-or-edit-projetos/create-or-edit-projetos.component';
import { ProjetoService } from './projetos/projetos.service';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CreateOrEditUsuarioComponent } from './usuarios/create-or-edit-usuario/create-or-edit-usuario.component';
import { AlterarSenhaComponent } from './alterar-senha/alterar-senha.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DashboardComponent,
    DragDropComponent,
    AddressFormComponent,
    HomeComponent,
    ChangeAvatarComponent,
    ProjetosComponent,
    CreateOrEditProjetosComponent,
    UsuariosComponent,
    CreateOrEditUsuarioComponent,
    AlterarSenhaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    LayoutModule,
    SharedModule,
    
    MatInputModule,
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    DragDropModule,
    MatSelectModule,
    MatRadioModule,
    MatProgressSpinnerModule,

    ModalModule.forRoot(),

    AvatarModule,
  ],
  providers: [
    ProjetoService
  ],
})
export class AppModule { }
