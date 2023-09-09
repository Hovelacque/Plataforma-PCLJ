import { Injectable, Injector } from '@angular/core';
import { AppSessionService } from '@shared/session/app-session.service';

@Injectable({
    providedIn: 'root',
})
export class AppInitializer {
    constructor(
        private _injector: Injector
    ) { }

    init(): () => Promise<boolean> {
        return () => {
            pclj.ui.setBusy();
            return new Promise<boolean>((resolve, reject) => {
                const appSessionService = this._injector.get(AppSessionService);
                appSessionService.init().then(
                    (result: any) => {
                        pclj.ui.clearBusy();
                        resolve(result);
                    },
                    (err) => {
                        pclj.ui.clearBusy();
                        reject(err);
                    }
                );
            });
        }
    }
}
