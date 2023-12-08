import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AppConsts } from '@shared/AppConsts';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css']
})
export class JogosComponent {

  jogos: any =
    {
      cores: {
        img: this.montaUrlJogo("cores", "png"),
        url: this.montaUrlJogo("cores", "html")
      },
      memoria: {
        img: this.montaUrlJogo("memoria", "png"),
        url: this.montaUrlJogo("memoria", "html")
      },
      letras: {
        img: this.montaUrlJogo("letras", "png"),
        url: this.montaUrlJogo("letras", "html")
      },
      matematica: {
        img: this.montaUrlJogo("matematica", "png"),
        url: this.montaUrlJogo("matematica", "html")
      }
    };

  constructor(
    private domSanitizer: DomSanitizer
  ) { }

  montaUrlJogo(jogo: string, ext: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(`${AppConsts.remoteServiceBaseUrl}/uploads/jogos/${jogo}.${ext}`);
  }

}
