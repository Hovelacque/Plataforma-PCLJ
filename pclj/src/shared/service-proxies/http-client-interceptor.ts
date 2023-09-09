import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '@shared/services/token.service';

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor {

    private _tokenService: TokenService = new TokenService();

    intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let token = this._tokenService.get();

        let headers = httpRequest.headers;
        headers = headers.append("Content-Type", "application/x-www-form-urlencoded;");
        headers = headers.append("Authorization", `Bearer ${token}`);

        return next.handle(httpRequest.clone({ headers: headers }));
    }
}