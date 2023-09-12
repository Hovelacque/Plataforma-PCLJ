import { Injectable } from '@angular/core';
import { ProjetoListOutput } from './projeto-list-output';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, delay, first } from 'rxjs';
import { ProjetoDto } from './projeto-dto';
import { AppConsts } from '@shared/AppConsts';

@Injectable({
  providedIn: 'root'
})
export class ProjetoServiceProxyService {
  
  private readonly API = AppConsts.remoteServiceBaseUrl + '/projetos/';

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(): Observable<ProjetoListOutput[]> {
    return this.httpClient
      .get<ProjetoListOutput[]>(`${this.API}list.php`)
      .pipe(first()); //fecha a conexão com o servidor
  }

  get(id: number): Observable<ProjetoDto> {
    return this.httpClient
      .get<ProjetoDto>(`${this.API}getById.php`, {
        params: new HttpParams().set('id', id)
      })
      .pipe(first()); //fecha a conexão com o servidor
  }

  create(item: Partial<ProjetoDto>): Observable<any> {
    return this.httpClient.post(`${this.API}create.php`, item)
  }

  update(item: Partial<ProjetoDto>): Observable<any> {
    return this.httpClient.put(`${this.API}update.php`, item)
  }

}
