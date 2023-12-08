import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicoRoutingModule } from './publico-routing.module';

import { PublicoComponent } from './publico.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';

import { CarrosselComponent } from './carrossel/carrossel.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';

import { CarouselModule } from 'primeng/carousel';
import { AlunosComponent } from './alunos/alunos.component';
import { AlunoComponent } from './aluno/aluno.component';
import { TrabalhosComponent } from './trabalhos/trabalhos.component';
import { TrabalhoComponent } from './trabalho/trabalho.component';
import { JogosComponent } from './jogos/jogos.component';
import { LoadScratchComponent } from './load-scratch/load-scratch.component';


@NgModule({
  declarations: [
    PublicoComponent,
    CarrosselComponent,
    HomeComponent,
    LoginComponent,
    AlunosComponent,
    AlunoComponent,
    TrabalhosComponent,
    TrabalhoComponent,
    JogosComponent,
    LoadScratchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PublicoRoutingModule,

    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule,

    CarouselModule
  ]
})
export class PublicoModule { }
