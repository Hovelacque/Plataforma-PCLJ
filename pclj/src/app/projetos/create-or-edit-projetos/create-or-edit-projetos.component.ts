import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjetoService } from '../projetos.service';
import { Router } from '@angular/router';
import { ProjetoServiceProxyService } from '@shared/service-proxies/projeto/projeto-service-proxy.service';
import { finalize } from 'rxjs';
import { AppComponentBase } from '@shared/app-component-base';

@Component({
  selector: 'create-or-edit-projetos',
  templateUrl: './create-or-edit-projetos.component.html',
  styleUrls: ['./create-or-edit-projetos.component.css']
})
export class CreateOrEditProjetosComponent extends AppComponentBase implements OnInit {

  id: number = 0;
  projeto: any;

  projetoForm: FormGroup = null;
  editing: boolean = false;
  active: boolean = false;

  constructor(
    public injector: Injector,
    private formBuilder: FormBuilder,
    private _router: Router,
    private _service: ProjetoServiceProxyService,
    private _projetoServico: ProjetoService
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.id = this._projetoServico.id;
    if (this.id > 0) {
      pclj.ui.setBusy();
      this._service.get(this.id)
        .pipe(finalize(() => pclj.ui.clearBusy()))
        .subscribe((item) => {
          this.editing = true;

          this.projetoForm = this.formBuilder.group({
            id: item.id,
            nome: [item.nome, Validators.required],
            descricao: [item.descricao, Validators.required],
            pastaDeArquivos: ['']
          });

          this.active = true;
        });
    }
    else {
      this.editing = false;
      this.projetoForm = this.formBuilder.group({
        id: [''],
        nome: ['', Validators.required],
        descricao: ['', Validators.required],
        pastaDeArquivos: ['']
      });
      this.active = true;
    }
  }

  create(): void {
    pclj.ui.setBusy();
    this._service.create(this.projetoForm.value)
      .pipe(finalize(() => pclj.ui.clearBusy()))
      .subscribe({
        next: () => {
          this.notify("Salvo com sucesso!");
          this.close();
        },
        error: (result) => {
          pclj.message.error(result.error.message);
        }
      });
  }

  update(): void {
    pclj.ui.setBusy();
    this._service.update(this.projetoForm.value)
      .pipe(finalize(() => pclj.ui.clearBusy()))
      .subscribe({
        next: () => {
          this.notify("Salvo com sucesso!");
          this.close();
        },
        error: (result) => {
          pclj.message.error(result.error.message);
        }
      });
  }

  save(): void {
    if (this.editing)
      this.update();
    else
      this.create();
  }

  close(): void {
    this._router.navigate(['app/projetos']);
  }

}
