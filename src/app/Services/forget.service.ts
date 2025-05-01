import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Forget, ResetPasswor } from '../interfaces/forget';
import { Observable } from 'rxjs';
import { Url } from '../bases/base-url';

@Injectable({
  providedIn: 'root'
})
export class ForgetService {

  constructor(private _HttpClient:HttpClient) { }
  emailConfirm(emial:Forget):Observable<any>
  {
    const token = localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
return this._HttpClient.post(`${Url.baseurl}/api/Auth/forget-password`,emial , {headers:headers})
  }

  resetPassword(restForm:ResetPasswor):Observable<any>
  {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._HttpClient.post(`${Url.baseurl}/api/Auth/reset-password`,restForm , {headers:headers})
  }
}
