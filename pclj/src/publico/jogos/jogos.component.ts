import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AppConsts } from '@shared/AppConsts';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css']
})
export class JogosComponent implements OnInit {

  jogos: any =
    {
      cores: {
        url: this.montaUrlTrabalho("cores")
      },
      memoria: {
        url: this.montaUrlTrabalho("memoria")
      },
      letras: {
        url: this.montaUrlTrabalho("letras")
      },
      matematica: {
        url: this.montaUrlTrabalho("matematica")
      }
    };

  constructor(
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
  }

  montaUrlTrabalho(jogo: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(`${AppConsts.remoteServiceBaseUrl}/uploads/jogos/${jogo}.html`);
  }

}
