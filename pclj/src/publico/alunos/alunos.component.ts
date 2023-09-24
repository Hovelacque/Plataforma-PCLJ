import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { AlunoOutput } from '@shared/service-proxies/usuario/aluno-output';
import { UsuarioServiceProxyService } from '@shared/service-proxies/usuario/usuario-service-proxy.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent extends AppComponentBase implements OnInit {

  alunos: AlunoOutput[] = [];

  constructor(
    public injector: Injector,
    private _service: UsuarioServiceProxyService
  ) {
    super(injector);
  }

  ngOnInit() {
    this.loadAlunos();
  }

  loadAlunos(): void {
    this._service.getAllAlunos()
      .subscribe((result) => {
        this.alunos = result;
      })
  }

}