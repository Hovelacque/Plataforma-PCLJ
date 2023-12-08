import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, delay, first } from 'rxjs';
import { AppConsts } from '@shared/AppConsts';
import { TrabalhoListOutput } from './trabalho-list-output';
import { AlunoTrabalhoOutput, TrabalhoOutput } from './trabalho-output';

@Injectable({
    providedIn: 'root'
})
export class TrabalhoServiceProxyService {

    private readonly API = AppConsts.remoteServiceBaseUrl + '/trabalhos/';

    constructor(
        private httpClient: HttpClient
    ) { }

    getAll(): Observable<TrabalhoListOutput[]> {
        return this.httpClient
            .get<TrabalhoListOutput[]>(`${this.API}list.php`)
            .pipe(first()); //fecha a conexão com o servidor
    }

    get(id: number): Observable<TrabalhoOutput> {
        return this.httpClient
            .get<TrabalhoOutput>(`${this.API}getById.php`, {
                params: new HttpParams().set('id', id)
            })
            .pipe(first()); //fecha a conexão com o servidor
    }

    getByAlunoId(id: number): Observable<string[]> {
        return this.httpClient
            .get<string[]>(`${this.API}getByAlunoId.php`, {
                params: new HttpParams().set('id', id)
            })
            .pipe(first()); //fecha a conexão com o servidor
    }
}
