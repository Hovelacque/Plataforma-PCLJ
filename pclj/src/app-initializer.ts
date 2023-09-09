import { Injectable, Injector } from '@angular/core';
import { AppConsts } from '@shared/AppConsts';
import { AppSessionService } from '@shared/session/app-session.service';
import { environment } from './environments/environment';
import { PlatformLocation } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class AppInitializer {
    constructor(
        private _injector: Injector,
        private _platformLocation: PlatformLocation,
        private _httpClient: HttpClient
    ) { }

    init(): () => Promise<boolean> {
        return () => {
            pclj.ui.setBusy();
            return new Promise<boolean>((resolve, reject) => {
                const appBaseUrl = this.getDocumentOrigin() + this.getBaseHref();
                this.getApplicationConfig(appBaseUrl, () => {
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
            });
        };
    }

    private getBaseHref(): string {
        const baseUrl = this._platformLocation.getBaseHrefFromDOM();
        if (baseUrl) {
            return baseUrl;
        }

        return '/';
    }

    private getDocumentOrigin(): string {
        if (!document.location.origin) {
            const port = document.location.port ? ':' + document.location.port : '';
            return (
                document.location.protocol + '//' + document.location.hostname + port
            );
        }

        return document.location.origin;
    }

    private getApplicationConfig(appRootUrl: string, callback: () => void) {
        this._httpClient
            .get<any>(`${appRootUrl}assets/${environment.appConfig}`)
            .subscribe((response) => {
                AppConsts.appBaseUrl = response.appBaseUrl;
                AppConsts.remoteServiceBaseUrl = response.remoteServiceBaseUrl;

                callback();
            });
    }

}
