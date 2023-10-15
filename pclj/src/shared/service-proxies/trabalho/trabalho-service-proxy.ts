import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, delay, first } from 'rxjs';
import { AppConsts } from '@shared/AppConsts';
import { TrabalhoListOutput } from './trabalho-list-output';
import { TrabalhoOutput } from './trabalho-output';

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

    // create(item: Partial<UsuarioDto>, imageBase64: any): Observable<any> {
    //     return this.httpClient.post(`${this.API}create.php`, { ...item, image: imageBase64 })
    // }

    // update(item: Partial<UsuarioDto>, imageBase64: any): Observable<any> {
    //     return this.httpClient.put(`${this.API}update.php`, { ...item, image: imageBase64 })
    // }

    // updateAvatar(item: Partial<UsuarioDto>, imageBase64: any): Observable<any> {
    //     return this.httpClient.put(`${this.API}updateAvatar.php`, { ...item, image: imageBase64 })
    // }
}
