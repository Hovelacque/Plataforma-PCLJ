import { Component } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { CreateOrEditUsuarioComponent } from './create-or-edit-usuario/create-or-edit-usuario.component';
import { UsuarioListOutput } from '@shared/service-proxies/usuario/usuario-list-output';
import { UsuarioServiceProxyService } from '@shared/service-proxies/usuario/usuario-service-proxy.service';

@Component({
  selector: 'usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

  usuarios: UsuarioListOutput[] = [];
  displayedColumns = ['id', 'nome', 'tipo', 'actions'];

  modalRef?: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private _service: UsuarioServiceProxyService,
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
    this.modalService.show(CreateOrEditUsuarioComponent);
  }

  edit(item: UsuarioListOutput): void {
    let params: ModalOptions = {
      initialState: {
        id: item.id
      }
    };
    this.modalService.show(CreateOrEditUsuarioComponent, params);
  }

}
