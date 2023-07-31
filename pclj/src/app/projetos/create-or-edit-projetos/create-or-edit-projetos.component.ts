import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjetoService } from '../projetos.service';
import { Router } from '@angular/router';
import { ProjetoServiceProxyService } from '@shared/service-proxies/projeto/projeto-service-proxy.service';

@Component({
  selector: 'create-or-edit-projetos',
  templateUrl: './create-or-edit-projetos.component.html',
  styleUrls: ['./create-or-edit-projetos.component.css']
})
export class CreateOrEditProjetosComponent implements OnInit {

  id: number = 0;
  projeto: any;

  projetoForm: FormGroup = this.formBuilder.group({
    id: [''],
    nome: ['', Validators.required],
    descricao: ['', Validators.required],
    pastaDeArquivos: ['']
  });

  constructor(
    private formBuilder: FormBuilder,
    private _router: Router,
    private _service: ProjetoServiceProxyService,
    private _projetoServico: ProjetoService
  ) {
  }

  ngOnInit(): void {
    this.id = this._projetoServico.id;
    if (this.id > 0) {
      this._service.get(this.id)
        // .pipe(finalize(() => {
        //   abp.ui.clearBusy();
        // }))
        .subscribe((result) => {
          let item = result[0];
          this.projetoForm.setValue({
            id: item.id,
            nome: item.nome,
            descricao: item.descricao,
            pastaDeArquivos: item.pastaDeArquivos
          })
          // this.active = true;
        });
    }
    // else {
    // this.projeto = this.newData();
    // this.active = true;
    // }
  }

  save(): void {
    this._service.create(this.projetoForm.value)
      .subscribe(() => console.log('Salvo'),
        error => console.error(error));
  }

  close(): void {
    this._router.navigate(['app/projetos']);
  }

}
