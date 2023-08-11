import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, delay, first } from 'rxjs';
import { UsuarioDto } from './usuario-dto';
import { UsuarioListOutput } from './usuario-list-output';

@Injectable({
    providedIn: 'root'
})
export class UsuarioServiceProxyService {

    private readonly API = 'http://localhost/usuario/';

    constructor(
        private httpClient: HttpClient
    ) { }

    getAll(): Observable<UsuarioListOutput[]> {
        return this.httpClient
            .get<UsuarioListOutput[]>(`${this.API}list.php`)
            .pipe(first()); //fecha a conexão com o servidor
    }

    get(id: number): Observable<UsuarioDto> {
        return this.httpClient
            .get<UsuarioDto>(`${this.API}getById.php`, {
                params: new HttpParams().set('id', id)
            })
            .pipe(first()); //fecha a conexão com o servidor
    }

    create(item: Partial<UsuarioDto>): Observable<any> {
        return this.httpClient.post(`${this.API}create.php`, item);
    }
}
