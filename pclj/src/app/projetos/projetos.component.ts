import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TableDataSource, TableItem } from '../table/table-datasource';
import { ProjetoService } from './projetos.service';
import { Router } from '@angular/router';
import { ProjetoServiceProxyService } from '@shared/service-proxies/projeto/projeto-service-proxy.service';
import { ProjetoListOutput } from '@shared/service-proxies/projeto/projeto-list-output';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent {

  projetos: ProjetoListOutput[];
  displayedColumns = ['nome', 'descricao', 'actions'];

  constructor(
    private _router: Router,
    private _service: ProjetoServiceProxyService,
    private _projetoServico: ProjetoService
  ) {
    this.refresh()
  }

  refresh(): void {
    this._service.getAll()
      .subscribe((result) => {
        this.projetos = result;
      })
  }

  create(): void {
    this._projetoServico.id = 0;
    this._router.navigate(['app/create-or-edit-projeto']);
  }

  edit(item: ProjetoListOutput): void {
    this._projetoServico.id = item.id;
    this._router.navigate(['app/create-or-edit-projeto']);
  }
}