import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioServiceProxyService } from '@shared/service-proxies/usuario/usuario-service-proxy.service';
import { AvatarOptions } from 'avatar-angular-kapibara';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-create-or-edit-usuario',
  templateUrl: './create-or-edit-usuario.component.html',
  styleUrls: ['./create-or-edit-usuario.component.css']
})
export class CreateOrEditUsuarioComponent implements OnInit {

  @Output() onSave = new EventEmitter<any>();

  id: number = null;
  avatar: AvatarOptions = new AvatarOptions();
  editing: boolean = false;
  active: boolean = false;

  usuarioForm: FormGroup = null;

  constructor(
    private formBuilder: FormBuilder,
    private _service: UsuarioServiceProxyService,
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit(): void {
    if (this.id > 0) {
      this.editing = true;
      this._service.get(this.id)
        // .pipe(finalize(() => {
        //   abp.ui.clearBusy();
        // }))
        .subscribe((result) => {
          this.usuarioForm = this.formBuilder.group({
            id: [result.id],
            nome: [result.nome, Validators.required],
            tipo: [result.tipo],

            olho: [result.olho],
            roupa: [result.roupa]
          });
          this.active = true;
        });
    }
    else {
      this.editing = false;
      this.generateRandom();
      this.usuarioForm = this.formBuilder.group({
        id: [''],
        nome: ['', Validators.required],
        senha: [this.generatePassword(), Validators.required],
        tipo: [1],

        olho: [this.avatar.eyes],
        roupa: [this.avatar.clothes]
      });
      this.active = true;
    }
  }

  generatePassword(): string {
    return Math.random().toString(36).substr(2, 10);
  }

  generateRandom() {
    this.avatar.getRandom();
    if (this.usuarioForm)
      this.usuarioForm.setValue({
        olho: this.avatar.eyes,
        roupa: this.avatar.clothes
      });
  }

  save(): void {
    this._service.create(this.usuarioForm.value)
      .subscribe(() => {
        alert('Salvo');
        this.onSave.emit();
        this.bsModalRef.hide();
      });
  }

}
