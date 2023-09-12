import { Component } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { CreateOrEditUsuarioComponent } from './create-or-edit-usuario/create-or-edit-usuario.component';
import { UsuarioListOutput } from '@shared/service-proxies/usuario/usuario-list-output';
import { UsuarioServiceProxyService } from '@shared/service-proxies/usuario/usuario-service-proxy.service';
import { TipoUsuario } from '@shared/enums/tipo-usuario.enum';

@Component({
  selector: 'usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers: [
    TipoUsuario
  ]
})
export class UsuariosComponent {

  usuarios: UsuarioListOutput[] = [];
  displayedColumns = ['id', 'nome', 'usuario', 'tipo', 'actions'];

  modalRef?: BsModalRef;

  constructor(
    private _modalService: BsModalService,
    private _service: UsuarioServiceProxyService,
    public tipoUsuario: TipoUsuario
  ) {
    this.refresh();
  }

  refresh(): void {
    this._service.getAll()
      .subscribe((result) => {
        this.usuarios = result;
      })
  }

  create(): void {
    this.openModal();
  }

  edit(item: UsuarioListOutput): void {
    this.openModal({
      initialState: {
        id: item.id
      }
    });
  }

  openModal(params: ModalOptions = null): void {
    let modal = this._modalService.show(CreateOrEditUsuarioComponent, params);
    modal.content.onSave.subscribe(() => {
      this.refresh();
    });
  }

}
