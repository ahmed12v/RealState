import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Url } from '../bases/base-url';
import { Login } from '../interfaces/login';
import { isPlatformBrowser } from '@angular/common';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  UserDataAfterDecoded: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private _HttpClient: HttpClient, @Inject(PLATFORM_ID) private id: object) {
    if (isPlatformBrowser(id)) {
      if (localStorage.getItem('token')) {
        this.decodToken();
      }
    }
  }

  Login(loginForm: Login): Observable<any> {
    return this._HttpClient.post(`${Url.baseurl}/api/Auth/Login`, loginForm);
  }

  decodToken() {
    const token = localStorage.getItem('token');
    if (token && token.split('.').length === 3) {
      const decoded = jwtDecode(token);
      this.UserDataAfterDecoded.next(decoded);
    } else {
      console.error('Invalid token format:', token);
    }
  }

}
