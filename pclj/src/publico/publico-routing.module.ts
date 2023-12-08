import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PublicoComponent } from './publico.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AlunosComponent } from './alunos/alunos.component';
import { AlunoComponent } from './aluno/aluno.component';
import { TrabalhosComponent } from './trabalhos/trabalhos.component';
import { TrabalhoComponent } from './trabalho/trabalho.component';
import { JogosComponent } from './jogos/jogos.component';
import { HistoricoComponent } from './historico/historico.component';

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
          { path: 'aluno/:id', component: AlunoComponent },
          { path: 'trabalhos', component: TrabalhosComponent },
          { path: 'trabalho/:id', component: TrabalhoComponent },
          { path: 'jogos', component: JogosComponent },
          { path: 'historico', component: HistoricoComponent }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class PublicoRoutingModule { }
