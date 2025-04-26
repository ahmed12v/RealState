import { HttpClient } from '@angular/common/http';
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
return this._HttpClient.post(`${Url.baseurl}/api/Auth/forget-password`,emial)
  }

  resetPassword(restForm:ResetPasswor):Observable<any>
  {
    return this._HttpClient.post(`${Url.baseurl}/api/Auth/reset-password`,restForm)
  }
}
