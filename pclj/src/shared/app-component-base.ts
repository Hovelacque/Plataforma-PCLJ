import { Injector } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AppSessionService } from '@shared/session/app-session.service';
import { AppConsts } from './AppConsts';

export abstract class AppComponentBase {

    appSession: AppSessionService;
    snackBar: MatSnackBar;

    constructor(injector: Injector) {
        this.snackBar = injector.get(MatSnackBar);
        this.appSession = injector.get(AppSessionService);
    }

    notify(message: string): void {
        this.snackBar.open(message, '', { duration: 3000 });
    }

    montaUrlAvatar(usuarioId: number): string {
        return usuarioId ? `${AppConsts.remoteServiceBaseUrl}/uploads/avatares/${usuarioId}.png` : "assets/images/avatar.png";
    }

}
