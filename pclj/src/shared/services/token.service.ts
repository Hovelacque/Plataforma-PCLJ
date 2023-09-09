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
    let cookie = this.get();
    if (cookie == "") {
      var cookieValue = encodeURIComponent(this.tokenCookieName) + '=';
      cookieValue = cookieValue + encodeURIComponent(value) + "; path=/";

      document.cookie = cookieValue;
    }
  }

  delete(): void {
    let cookie = this.get();
    if (cookie != "") {
      var cookieValue = encodeURIComponent(this.tokenCookieName) + '=';
      document.cookie = cookieValue + "; path=/";
    }
  }
}
