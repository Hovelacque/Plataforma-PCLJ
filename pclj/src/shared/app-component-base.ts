import { Injector } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AppSessionService } from '@shared/session/app-session.service';
import { AppConsts } from './AppConsts';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export abstract class AppComponentBase {

    appSession: AppSessionService;
    snackBar: MatSnackBar;
    domSanitizer: DomSanitizer;

    constructor(injector: Injector) {
        this.snackBar = injector.get(MatSnackBar);
        this.appSession = injector.get(AppSessionService);
        this.domSanitizer = injector.get(DomSanitizer);         
    }

    notify(message: string): void {
        this.snackBar.open(message, '', { duration: 3000 });
    }

    montaUrlAvatar(usuarioId: number): string {
        return usuarioId ? `${AppConsts.remoteServiceBaseUrl}/uploads/avatares/${usuarioId}.png` : "assets/images/avatar.png";
    }

    montaUrlTrabalho(pastaDeArquivos: string, alunoId: number, formato: string = 'html'): SafeResourceUrl {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(`${AppConsts.remoteServiceBaseUrl}/uploads/trabalhos/${pastaDeArquivos}/${alunoId}.${formato}`);
    }
}
