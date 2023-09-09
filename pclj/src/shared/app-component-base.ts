import { Injector } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AppSessionService } from '@shared/session/app-session.service';

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

}
