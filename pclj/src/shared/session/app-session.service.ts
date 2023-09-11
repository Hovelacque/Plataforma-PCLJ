import { Injectable } from '@angular/core';
import { AppConsts } from '@shared/AppConsts';
import { SessionServiceProxyService } from '@shared/service-proxies/session/session-service-proxy.service';
import { UsuarioLoginInfoOutput } from '@shared/service-proxies/session/usuario-login-info-output';

@Injectable()
export class AppSessionService {

    private _usuario: UsuarioLoginInfoOutput | null = null;

    constructor(
        private _sessionService: SessionServiceProxyService,
    ) {
    }

    get usuario(): UsuarioLoginInfoOutput | null {
        return this._usuario;
    }

    get usuarioId(): number | null {
        return this.usuario ? this.usuario.id : null;
    }

    get administrador(): boolean {
        return this.usuario.tipo == 1;
    }

    get professor(): boolean {
        return this.usuario.tipo == 2;
    }

    get aluno(): boolean {
        return this.usuario.tipo == 3;
    }

    get nome(): string {
        return this.usuario ? this.usuario.nome : "";
    }

    get avatar(): string {
        return this.usuario ? `${AppConsts.remoteServiceBaseUrl}/uploads/avatares/${this.usuario.id}.png` : "assets/images/avatar.png";
    }

    init(): Promise<boolean> {
        return this.refreshSession();
    }

    refreshSession(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this._sessionService.getCurrentUser()
                .subscribe((result: UsuarioLoginInfoOutput) => {
                    this._usuario = result;
                    resolve(true);
                });
        });
    }

    isGranted(permissionName: string): boolean {
        if (permissionName == "Usuarios" && !this.administrador)
            return false;
        return true;
    }
}
