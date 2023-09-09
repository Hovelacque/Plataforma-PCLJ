import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, first } from 'rxjs';
import { TokenService } from '../token.service';
import { TokenOutput } from './token-output';
import { UsuarioLoginInfoOutput } from './usuario-login-info-output';

@Injectable({
    providedIn: 'root'
})
export class SessionServiceProxyService {

    private readonly API = 'http://localhost/session/';
    private _tokenService: TokenService = new TokenService();

    constructor(
        private httpClient: HttpClient
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
                },
                error: (result) => {
                    alert(result.error.message);
                    this._tokenService.delete();
                    observer.complete();
                }
            });
        });
    }

    getCurrentUser(): Observable<UsuarioLoginInfoOutput> {
        return this.httpClient
            .get<UsuarioLoginInfoOutput>(`${this.API}getCurrentUser.php`)
            .pipe(first());//fecha a conexão com o servidor
    }

}
