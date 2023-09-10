import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, delay, first } from 'rxjs';
import { UsuarioDto } from './usuario-dto';
import { UsuarioListOutput } from './usuario-list-output';
import { AppConsts } from '@shared/AppConsts';
import { TokenService } from '@shared/services/token.service';

@Injectable({
    providedIn: 'root'
})
export class UsuarioServiceProxyService {

    private readonly API = AppConsts.remoteServiceBaseUrl + '/usuario/';

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
        return this.httpClient.post(`${this.API}create.php`, item)
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

    uploadBlobFotoPerfil(blob: any): Promise<string> {
        return new Promise<string>((resolve, reject) => {

            let file = new File([blob], "blobConvertido.jpeg", { type: blob.type });
            let tokenService = new TokenService();
            let token = tokenService.get();
            // let token = abp.auth.getToken();

            var data = new FormData();
            //por algum motivo se tirar esse append a img não chega no back
            data.append("folder", 'tes');
            data.append('image', file)

            var xhr = new XMLHttpRequest();
            xhr.open('POST', `${this.API}upload.php`, true);
            xhr.setRequestHeader("Authorization", `Bearer ${token}`);

            xhr.setRequestHeader("Content-Type", 'multipart/form-data');

            xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
            xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            xhr.setRequestHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
        
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4)
                    if (xhr.status == 200) {
                        var response = JSON.parse(xhr.response);

                        if (response && response.result && response.result.message && response.result.message == 'Success!') {
                            resolve(response.result.fileName);
                        }
                        else {
                            reject(response.result.errorMessage);
                        }

                    }
            };
            xhr.send(data);

        });
    }

}
