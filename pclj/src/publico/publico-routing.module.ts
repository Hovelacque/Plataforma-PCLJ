import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PublicoComponent } from './publico.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AlunosComponent } from './alunos/alunos.component';
import { AlunoComponent } from './aluno/aluno.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: PublicoComponent,
        children: [
          { path: '', component: HomeComponent },
          { path: 'login', component: LoginComponent },
          { path: 'alunos', component: AlunosComponent },
          { path: 'aluno/:id', component: AlunoComponent }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class PublicoRoutingModule { }
