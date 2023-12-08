import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {

  logos:string[]=[
    'assets/images-site/Banner-1.png',
    'assets/images-site/Banner-1.png',
    'assets/images-site/Banner-1.png',
    'assets/images-site/Banner-1.png',
    'assets/images-site/Banner-1.png',
    'assets/images-site/Banner-1.png',
    'assets/images-site/Banner-1.png',
    'assets/images-site/Banner-1.png',
    'assets/images-site/Banner-1.png',
    'assets/images-site/Banner-1.png',
    'assets/images-site/Banner-1.png',
    'assets/images-site/Banner-1.png',
    'assets/images-site/Banner-1.png',
  ];

  desenvolvimento:string[]=[
    'assets/images-site/Banner-1.png',
    'assets/images-site/Banner-1.png',
    'assets/images-site/Banner-1.png',
    'assets/images-site/Banner-1.png',
    'assets/images-site/Banner-1.png',
    'assets/images-site/Banner-1.png',
    'assets/images-site/Banner-1.png',
    'assets/images-site/Banner-1.png',
    'assets/images-site/Banner-1.png',
    'assets/images-site/Banner-1.png',
    'assets/images-site/Banner-1.png',
    'assets/images-site/Banner-1.png',
    'assets/images-site/Banner-1.png',
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
