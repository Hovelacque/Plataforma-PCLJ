import { Injectable } from '@angular/core';
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

    getShownLoginName(): string {
        return this.usuario ? this.usuario.nome : "";
    }

    init(): Promise<boolean> {
        return this.refreshSession();
    }

    refreshSession(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this._sessionService.getCurrentUser().subscribe((result: UsuarioLoginInfoOutput) => {
                this._usuario = result;
                resolve(true);
            });
        });
    }
}
