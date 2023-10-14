import { Component, Injector, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AppComponentBase } from '@shared/app-component-base';

@Component({
  selector: 'app-publico',
  templateUrl: './publico.component.html',
  styleUrls: ['./publico.component.css']
})
export class PublicoComponent extends AppComponentBase implements OnInit {

  routes: any[] = [
    { name: "Home", route: "/" },
    { name: "Alunos", route: "alunos" },
    { name: "Jogos", route: "#jogos" },
    { name: "Trabalhos", route: "trabalhos" },
    { name: "Projetos", route: "#projetos" },
    // { name: "Histórico do Projeto", route: "#historico" }
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  opened = false;

  constructor(
    public injector: Injector,
    private _router: Router,
    private breakpointObserver: BreakpointObserver
  ) {
    super(injector);
  }

  ngOnInit(): void {
  }

  login(): void {
    if (!this.appSession.usuario)
      this._router.navigate(['login']);
    else
      this._router.navigate(['app/home']);
  }

}
