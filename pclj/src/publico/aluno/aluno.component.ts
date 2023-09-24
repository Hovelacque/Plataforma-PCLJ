import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponentBase } from '@shared/app-component-base';
import { AlunoOutput } from '@shared/service-proxies/usuario/aluno-output';
import { UsuarioServiceProxyService } from '@shared/service-proxies/usuario/usuario-service-proxy.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent extends AppComponentBase implements OnInit {

  trabalhos: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  aluno: AlunoOutput = null;

  constructor(
    public injector: Injector,
    private route: ActivatedRoute,
    private _router: Router,
    private _service: UsuarioServiceProxyService
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
  }

  loadAluno(id: number): void {
    pclj.ui.setBusy();
    this._service.getAluno(id)
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
}
