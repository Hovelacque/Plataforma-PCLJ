import { Injector } from '@angular/core';

import { AppSessionService } from '@shared/session/app-session.service';

export abstract class AppComponentBase {
    
    appSession: AppSessionService;

    constructor(injector: Injector) {
        this.appSession = injector.get(AppSessionService);
    }

}
