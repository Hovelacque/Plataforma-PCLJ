import { Component, Injector, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponentBase } from '@shared/app-component-base';
import { AlunoTrabalhoOutput } from '@shared/service-proxies/trabalho/trabalho-output';
import { TrabalhoServiceProxyService } from '@shared/service-proxies/trabalho/trabalho-service-proxy';
import { AlunoOutput } from '@shared/service-proxies/usuario/aluno-output';
import { UsuarioServiceProxyService } from '@shared/service-proxies/usuario/usuario-service-proxy.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent extends AppComponentBase implements OnInit {

  trabalhos: SafeResourceUrl[] = [];
  aluno: AlunoOutput = null;

  constructor(
    public injector: Injector,
    private route: ActivatedRoute,
    private _router: Router,
    private _usuarioService: UsuarioServiceProxyService,
    private _trabalhoService: TrabalhoServiceProxyService,
  ) {
    super(injector);
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      pclj.message.info("Aluno não encontrado");
      this._router.navigate(['/']);
      return;
    }

    this.loadAluno(Number(id));
    this.loadTrabalho(Number(id));
  }

  loadAluno(id: number): void {
    pclj.ui.setBusy();
    this._usuarioService.getAluno(id)
      .subscribe({
        next: (result) => {
          pclj.ui.clearBusy();
          this.aluno = result;
        },
        error: () => {
          pclj.ui.clearBusy();
          pclj.message.info("Aluno não encontrado");
          this._router.navigate(['/']);
        }
      })
  }

  loadTrabalho(id: number): void {
    pclj.ui.setBusy();
    this._trabalhoService.getByAlunoId(id)
      .subscribe({
        next: (result: string[]) => {
          pclj.ui.clearBusy();
          this.trabalhos = [];
          result.forEach(item => {
            this.trabalhos.push(this.montaUrlTrabalho(item, id))
          });
        },
        error: (error) => {
          pclj.ui.clearBusy();
          pclj.message.info("Trabalhos não encontrado");
        }
      })
  }
}
