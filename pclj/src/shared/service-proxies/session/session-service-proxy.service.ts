import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, first } from 'rxjs';
import { TokenOutput } from './token-output';
import { UsuarioLoginInfoOutput } from './usuario-login-info-output';
import { Router } from '@angular/router';
import { TokenService } from '@shared/services/token.service';
import { AppConsts } from '@shared/AppConsts';

@Injectable({
    providedIn: 'root'
})
export class SessionServiceProxyService {

    private readonly API = AppConsts.remoteServiceBaseUrl + '/session/';

    private _tokenService: TokenService = new TokenService();

    constructor(
        private httpClient: HttpClient,
        private _router: Router
    ) { }

    login(usuario: string, senha: string): Observable<any> {
        return new Observable<any>((observer: any) => {
            this.httpClient.post<TokenOutput>(`${this.API}login.php`, {
                usuario,
                senha
            }).subscribe({
                next: (result: TokenOutput) => {
                    this._tokenService.set(result.token);
                    observer.next();
                    observer.complete();
                },
                error: (result) => {
                    pclj.message.error(result.error.message);
                    this._tokenService.delete();
                    observer.complete();
                }
            });
        });
    }

    logout(): Observable<any> {
        return new Observable<any>((observer: any) => {
            this._tokenService.delete();
            this._router.navigate(['/']);
            observer.next();
        })
    }

    getCurrentUser(): Observable<UsuarioLoginInfoOutput> {
        return this.httpClient
            .get<UsuarioLoginInfoOutput>(`${this.API}getCurrentUser.php`)
            .pipe(first());//fecha a conexão com o servidor
    }

}
