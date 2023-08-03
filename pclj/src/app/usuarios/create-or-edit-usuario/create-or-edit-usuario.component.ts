import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioServiceProxyService } from '@shared/service-proxies/usuario/usuario-service-proxy.service';
import { AvatarOptions } from 'avatar-angular-kapibara';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-create-or-edit-usuario',
  templateUrl: './create-or-edit-usuario.component.html',
  styleUrls: ['./create-or-edit-usuario.component.css']
})
export class CreateOrEditUsuarioComponent implements OnInit {

  options: AvatarOptions = new AvatarOptions();

  usuarioForm: FormGroup = this.formBuilder.group({
    id: [''],
    nome: ['', Validators.required],
    senha: ['', Validators.required],
    tipo: [1]
  });

  constructor(
    private formBuilder: FormBuilder,
    private _service: UsuarioServiceProxyService,
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit(): void {
    this.generateRandom();
  }

  generateRandom() {
    this.options.getRandom();
  }

  save(): void {
    this._service.create(this.usuarioForm.value)
      .subscribe(() => console.log('Salvo'));
  }

}