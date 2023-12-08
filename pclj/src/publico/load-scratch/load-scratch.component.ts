import { Component, Input, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'load-scratch',
  templateUrl: './load-scratch.component.html',
  styleUrls: ['./load-scratch.component.css']
})
export class LoadScratchComponent {

  @Input() image: SafeResourceUrl = null;
  @Input() url: SafeResourceUrl = null;

  carregar: boolean = false;
  
  constructor() { }

}
