import { HttpClient } from '@angular/common/http';
import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { AlunoOutput } from '@shared/service-proxies/usuario/aluno-output';
import { UsuarioServiceProxyService } from '@shared/service-proxies/usuario/usuario-service-proxy.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends AppComponentBase implements OnInit {

  alunos: AlunoOutput[] = [];

  responsiveOptions;

  constructor(
    public injector: Injector,
    private _service: UsuarioServiceProxyService
  ) {
    super(injector);
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit() {
    this.loadAlunos();
  }

  loadAlunos(): void {
    this._service.getAllAlunos()
      .subscribe((result) => {
        this.alunos = result.sort(() => (Math.random() > .5) ? 1 : -1);;
      })
  }

}
