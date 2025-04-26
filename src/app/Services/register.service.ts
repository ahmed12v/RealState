import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../interfaces/register';
import { Observable } from 'rxjs';
import { url } from 'inspector';
import { Url } from '../bases/base-url';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private _HttpClient:HttpClient) { }

  Register(registerForm:Register):Observable<any>
  {
    return this._HttpClient.post(`${Url.baseurl}/api/Auth/register`,registerForm ,)
  }
}
