import { BreakpointObserver } from '@angular/cdk/layout';
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

  imagens: string[] = [];
  imagensLarge: string[] = [
    'assets/images-site/Banner-1.png',
    'assets/images-site/Banner-2.png',
    'assets/images-site/Banner-3.png'
  ];
  imagensMedium: string[] = [
    'assets/images-site/Banner-Tablet-01.jpg',
    'assets/images-site/Banner-Tablet-02.jpg',
    'assets/images-site/Banner-Tablet-03.jpg'
  ];
  imagensSmall: string[] = [
    'assets/images-site/Banner-Mobile-01.jpg',
    'assets/images-site/Banner-Mobile-02.jpg',
    'assets/images-site/Banner-Mobile-03.jpg'
  ];

  responsiveOptions;

  constructor(
    public injector: Injector,
    private breakpointObserver: BreakpointObserver,
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

    const isLargeScreen = breakpointObserver.isMatched('(min-width: 1024px)');
    if (isLargeScreen)
      this.imagens = this.imagensLarge;
    else {
      const isMediumScreen = breakpointObserver.isMatched('(min-width: 768px)');
      if (isMediumScreen)
        this.imagens = this.imagensMedium;
      else
        this.imagens = this.imagensSmall;
    }
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

  getBannerCentral(): string {
    const isLargeScreen = this.breakpointObserver.isMatched('(min-width: 1024px)');
    if (isLargeScreen)
      return 'assets/images-site/Banner-4.png';
    else {
      const isMediumScreen = this.breakpointObserver.isMatched('(min-width: 768px)');
      if (isMediumScreen)
        return 'assets/images-site/Banner-Inferior-Tablet.jpg';
      else
        return 'assets/images-site/Banner-Inferior-Mobile.jpg';
    }
  }

  getBannerFooter(): string {
    const isLargeScreen = this.breakpointObserver.isMatched('(min-width: 1024px)');
    if (isLargeScreen)
      return 'assets/images-site/Banner-Footer-Desktop.png';
    else {
      const isMediumScreen = this.breakpointObserver.isMatched('(min-width: 768px)');
      if (isMediumScreen)
        return 'assets/images-site/Banner-Footer-Tablet.png';
      else
        return 'assets/images-site/Banner-Footer-Mobile.png';
    }
  }

}
