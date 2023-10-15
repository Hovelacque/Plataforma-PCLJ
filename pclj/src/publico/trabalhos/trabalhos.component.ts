import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { TrabalhoListOutput } from '@shared/service-proxies/trabalho/trabalho-list-output';
import { TrabalhoServiceProxyService } from '@shared/service-proxies/trabalho/trabalho-service-proxy';

@Component({
  selector: 'app-trabalhos',
  templateUrl: './trabalhos.component.html',
  styleUrls: ['./trabalhos.component.css']
})
export class TrabalhosComponent  extends AppComponentBase implements OnInit {

  trabalhos: TrabalhoListOutput[] = [];

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