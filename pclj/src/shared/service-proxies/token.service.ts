import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  tokenCookieName = 'PCLJ.AuthToken';

  get(): string {
    var equalities = document.cookie.split('; ');
    for (var i = 0; i < equalities.length; i++) {
      if (!equalities[i]) {
        continue;
      }

      var splitted = equalities[i].split('=');
      if (splitted.length != 2) {
        continue;
      }

      if (decodeURIComponent(splitted[0]) === this.tokenCookieName) {
        return decodeURIComponent(splitted[1] || '');
      }
    }

    return "";
  }

  set(value: string): void {
    var cookieValue = encodeURIComponent(this.tokenCookieName) + '=';

    if (value) {
      cookieValue = cookieValue + encodeURIComponent(value);
    }

    document.cookie = cookieValue;
  }

  delete(): void {
    var cookieValue = encodeURIComponent(this.tokenCookieName) + '=';
    cookieValue = cookieValue + "; expires=" + (new Date(new Date().getTime() - 86400000)).toUTCString();
    document.cookie = cookieValue;
  }
}
