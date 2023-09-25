import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, delay, first } from 'rxjs';
import { UsuarioDto } from './usuario-dto';
import { UsuarioListOutput } from './usuario-list-output';
import { AppConsts } from '@shared/AppConsts';
import { TokenService } from '@shared/services/token.service';
import { AlunoOutput } from './aluno-output';
import { AlteraSenhaInput } from './altera-senha-input';

@Injectable({
    providedIn: 'root'
})
export class UsuarioServiceProxyService {

    private readonly API = AppConsts.remoteServiceBaseUrl + '/usuario/';

    constructor(
        private httpClient: HttpClient
    ) { }

    getAllAlunos(): Observable<AlunoOutput[]> {
        return this.httpClient
            .get<AlunoOutput[]>(`${this.API}getAllAlunos.php`)
            .pipe(first()); //fecha a conexão com o servidor
    }

    getAluno(id: number): Observable<AlunoOutput> {
        return this.httpClient
            .get<AlunoOutput>(`${this.API}getAluno.php`, {
                params: new HttpParams().set('id', id)
            })
            .pipe(first()); //fecha a conexão com o servidor
    }

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

    create(item: Partial<UsuarioDto>, imageBase64: any): Observable<any> {
        return this.httpClient.post(`${this.API}create.php`, { ...item, image: imageBase64 })
    }

    update(item: Partial<UsuarioDto>, imageBase64: any): Observable<any> {
        return this.httpClient.put(`${this.API}update.php`, { ...item, image: imageBase64 })
    }

    updateAvatar(item: Partial<UsuarioDto>, imageBase64: any): Observable<any> {
        return this.httpClient.put(`${this.API}updateAvatar.php`, { ...item, image: imageBase64 })
    }

    upload(fileToUpload: any) {
        let formData: FormData = new FormData();
        formData.append('file', fileToUpload);

        this.httpClient.post(`${this.API}upload.php`, formData).subscribe(
            data => {
                console.log(data);
            },
            error => {
                console.log(error);
            }
        );
    }

    uploadBlobFotoPerfil(blob: any): Promise<string> {
        return new Promise<string>((resolve, reject) => {

            this.httpClient.post(`${this.API}upload.php`, {
                'image': blob
            }).subscribe({
                next: (result) => {
                    pclj.message.success("foi");
                },
                error: (result) => {
                    pclj.message.error(result.error.message);
                }
            });
        });
    }

    alterarSenha(item: Partial<AlteraSenhaInput>): Observable<any> {
        return this.httpClient.put(`${this.API}alterarSenha.php`, item);
    }
}
