import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, first } from 'rxjs';
import { TokenService } from '../token.service';
import { TokenOutput } from './token-output';

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
            }).subscribe((result: TokenOutput) => {
                if (result.error) {
                    alert(result.message); 
                    this._tokenService.delete();                   
                    observer.complete();
                }
                else {
                    this._tokenService.set(result.token);
                    observer.next();
                }
            });
        });
    }

    getCurrentUser(): void {
        this.httpClient
            .get<any>(`${this.API}getCurrentUser.php`)
            .pipe(first())//fecha a conexão com o servidor
            .subscribe((a) => {
                debugger;
            });
    }

}
