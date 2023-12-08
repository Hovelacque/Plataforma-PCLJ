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
        img: this.montaUrlTrabalho("cores", "png"),
        url: this.montaUrlTrabalho("cores", "html")
      },
      memoria: {
        img: this.montaUrlTrabalho("memoria", "png"),
        url: this.montaUrlTrabalho("memoria", "html")
      },
      letras: {
        img: this.montaUrlTrabalho("letras", "png"),
        url: this.montaUrlTrabalho("letras", "html")
      },
      matematica: {
        img: this.montaUrlTrabalho("matematica", "png"),
        url: this.montaUrlTrabalho("matematica", "html")
      }
    };

  constructor(
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
  }

  montaUrlTrabalho(jogo: string, ext: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(`${AppConsts.remoteServiceBaseUrl}/uploads/jogos/${jogo}.${ext}`);
  }

}
