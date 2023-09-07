import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor {
    intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlJvZHJpZ28iLCJyb2xlIjoiYWRtaW4ifQ.__hf7XRYa9_WKO6RDAgoIxDW3AYb1sTJb7dRQgnre9U";

        let headers = httpRequest.headers;
        headers = headers.append("Content-Type", "application/x-www-form-urlencoded;");
        headers = headers.append("Authorization", `Bearer ${token}`);

        return next.handle(httpRequest.clone({ headers: headers }));
    }
}