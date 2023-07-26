import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-publico',
  templateUrl: './publico.component.html',
  styleUrls: ['./publico.component.css']
})
export class PublicoComponent implements OnInit {

  routes: any[] = [
    { name: "Home", route: "/" },
    { name: "Alunos", route: "#alunos" },
    { name: "Jogos", route: "#jogos" },
    { name: "Trabalhos", route: "#trabalhos" },
    { name: "Projetos", route: "#projetos" },
    { name: "Histórico do Projeto", route: "#historico" }
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  opened = false;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
  }

}
