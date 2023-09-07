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

        // let path = `${environment.celoApiEndpoint}/api/patientFiles`
        // let data = {
        //     "patientData": {
        //         "uid": "",
        //         "firstName": "",
        //         "lastName": "",
        //         "gender": "Not Specified",
        //         "dateOfBirth": ""
        //     }
        // }
        // // let headers = new HttpHeaders()
        // //   .set('content-type', 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW')
        // // let headers = new HttpHeaders().set('content-type', 'multipart/form-data')
        // const formData: FormData = new FormData();

        // for (let i = 0; i < files.length; i++) {
        //     formData.append(i.toString(), files[i], files[i].name);
        // }
        // formData.append("data", JSON.stringify(data));
        // this.http.post(path, formData).subscribe(
        //     (r) => { console.log('got r', r) }
        // )
    }

}
