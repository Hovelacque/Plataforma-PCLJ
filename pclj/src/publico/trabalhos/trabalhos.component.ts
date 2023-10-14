import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { TrabalhoOutput } from '@shared/service-proxies/trabalho/trabalho-output';
import { TrabalhoServiceProxyService } from '@shared/service-proxies/trabalho/trabalho-service-proxy';

@Component({
  selector: 'app-trabalhos',
  templateUrl: './trabalhos.component.html',
  styleUrls: ['./trabalhos.component.css']
})
export class TrabalhosComponent  extends AppComponentBase implements OnInit {

  trabalhos: TrabalhoOutput[] = [];

  constructor(
    public injector: Injector,
    private _service: TrabalhoServiceProxyService
  ) {
    super(injector);
  }

  ngOnInit() {
    this.loadTrabalhos();
  }

  loadTrabalhos(): void {
    this._service.getAll()
      .subscribe((result) => {
        this.trabalhos = result;
      })
  }

}