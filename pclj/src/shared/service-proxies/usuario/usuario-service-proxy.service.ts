import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, delay, first } from 'rxjs';
import { UsuarioDto } from './usuario-dto';

@Injectable({
    providedIn: 'root'
})
export class UsuarioServiceProxyService {

    private readonly API = 'http://localhost/usuario/';

    constructor(
        private httpClient: HttpClient
    ) { }

    //   getAll(): Observable<ProjetoListOutput[]> {
    //     return this.httpClient
    //       .get<ProjetoListOutput[]>(this.API)
    //       .pipe(first(), delay(500)); //fecha a conexão com o servidor
    //   }

    //   get(id: number): Observable<ProjetoDto[]> {
    //     return this.httpClient
    //       .get<ProjetoDto[]>(this.API)
    //       .pipe(first()); //fecha a conexão com o servidor
    //   }

    create(item: Partial<UsuarioDto>): Observable<UsuarioDto> {
        return this.httpClient.post<UsuarioDto>(`${this.API}create.php`,
            { data: item },
            { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }) }
        );
    }
}
