import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { CreateOrEditUsuarioComponent } from './create-or-edit-usuario/create-or-edit-usuario.component';
import { UsuarioDto } from '@shared/service-proxies/usuario/usuario-dto';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: UsuarioDto[] = [];

  modalRef?: BsModalRef;

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
  }

  create(): void {
    this.modalService.show(CreateOrEditUsuarioComponent);
  }

  edit(item: UsuarioDto): void {
    let params: ModalOptions = {
      initialState: {
        id: item.id
      }
    };
    this.modalService.show(CreateOrEditUsuarioComponent, params);
  }

}
