import { Component, Injector, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AppConsts } from '@shared/AppConsts';
import { AppComponentBase } from '@shared/app-component-base';
import { TrabalhoOutput } from '@shared/service-proxies/trabalho/trabalho-output';
import { TrabalhoServiceProxyService } from '@shared/service-proxies/trabalho/trabalho-service-proxy';

@Component({
  selector: 'app-trabalho',
  templateUrl: './trabalho.component.html',
  styleUrls: ['./trabalho.component.css']
})
export class TrabalhoComponent extends AppComponentBase implements OnInit {

  trabalho: TrabalhoOutput = null;

  constructor(
    public injector: Injector,
    private route: ActivatedRoute,
    private _router: Router,
    private _service: TrabalhoServiceProxyService,
    private domSanitizer: DomSanitizer
  ) {
    super(injector);
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      pclj.message.info("Trabalho não encontrado");
      this._router.navigate(['/']);
      return;
    }

    this.loadTrabalho(Number(id));
  }

  loadTrabalho(id: number): void {
    pclj.ui.setBusy();
    this._service.get(id)
      .subscribe({
        next: (result) => {
          pclj.ui.clearBusy();
          this.trabalho = result;
          // this.trabalho.alunos= this.trabalho.alunos.sort(() => (Math.random() > .5) ? 1 : -1);;
          this.trabalho.alunos.forEach(item => {
            item.url = this.montaUrlTrabalho(this.trabalho.pastaDeArquivos, item.id)
          });
        },
        error: () => {
          pclj.ui.clearBusy();
          pclj.message.info("Aluno não encontrado");
          this._router.navigate(['/']);
        }
      })
  }

  montaUrlTrabalho(pastaDeArquivos: string, alunoId: number): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(`${AppConsts.remoteServiceBaseUrl}/uploads/trabalhos/${pastaDeArquivos}/${alunoId}.html`);
  }
}
