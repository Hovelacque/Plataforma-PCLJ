import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent {

  logos: number[] = [...[...Array(16).keys()].map(i => i++)];
  desenvolvimento: number[] = [...[...Array(20).keys()].map(i => i++)];

  constructor() { }

  getURL(pasta: string, item: number, formato: string): string {
    return `assets/fotos-pclj/${pasta}/${item}.${formato}`;
  }
}
