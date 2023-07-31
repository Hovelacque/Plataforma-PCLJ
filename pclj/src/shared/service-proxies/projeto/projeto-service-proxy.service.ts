import { Injectable } from '@angular/core';
import { ProjetoListOutput } from './projeto-list-output';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, first } from 'rxjs';
import { ProjetoDto } from './projeto-dto';

@Injectable({
  providedIn: 'root'
})
export class ProjetoServiceProxyService {

  private readonly API = '/assets/projetos.json';

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(): Observable<ProjetoListOutput[]> {
    return this.httpClient
      .get<ProjetoListOutput[]>(this.API)
      .pipe(first(), delay(500)); //fecha a conexão com o servidor
  }

  get(id: number): Observable<ProjetoDto[]> {
    return this.httpClient
      .get<ProjetoDto[]>(this.API)
      .pipe(first()); //fecha a conexão com o servidor
  }

  create(item: Partial<ProjetoDto>) : Observable<ProjetoDto> {
    return this.httpClient.post<ProjetoDto>(this.API, item);
  }
}
