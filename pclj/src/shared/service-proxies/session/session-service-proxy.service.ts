import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, delay, first } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SessionServiceProxyService {

    private readonly API = 'http://localhost/session/';

    constructor(
        private httpClient: HttpClient
    ) { }

    getCurrentUser(): void {
        this.httpClient
            .get<any>(`${this.API}getCurrentUser.php`)
            .pipe(first())//fecha a conexão com o servidor
            .subscribe((a) => {
                debugger;
            });
    }

}
