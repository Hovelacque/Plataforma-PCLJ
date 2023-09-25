import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppComponentBase } from '@shared/app-component-base';
import { UsuarioServiceProxyService } from '@shared/service-proxies/usuario/usuario-service-proxy.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.component.html',
  styleUrls: ['./alterar-senha.component.css']
})
export class AlterarSenhaComponent extends AppComponentBase {

  active: boolean = false;
  alterarSenhaForm: FormGroup = null;

  constructor(
    public injector: Injector,
    private formBuilder: FormBuilder,
    private _service: UsuarioServiceProxyService,
    public bsModalRef: BsModalRef
  ) {
    super(injector);

    this.alterarSenhaForm = this.formBuilder.group({
      senhaAtual: ['', Validators.required],
      novaSenha: ['', Validators.required]
    });
    this.active = true;
  }

  save(): void {
    if (!this.alterarSenhaForm.valid) {
      return;
    }

    pclj.ui.setBusy();
    this._service.alterarSenha(this.alterarSenhaForm.value)
      .pipe(finalize(() => pclj.ui.clearBusy()))
      .subscribe({
        next: (result) => {
          this.notify("Senha alterada com sucesso!");
          this.bsModalRef.hide();
        },
        error: (result) => {
          pclj.message.error(result.error.message);
        }
      });
  }


}
