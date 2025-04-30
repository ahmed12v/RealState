import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Addrole, User } from '../interfaces/userwork';
import { url } from 'inspector';
import { Url } from '../bases/base-url';

@Injectable({
  providedIn: 'root'
})
export class UserworkService {

  constructor( private _HttpClient: HttpClient ) { }

  AllUsers():Observable<User>
  {
  return this._HttpClient.get<User>(`${Url.baseurl}/api/Users`)
  }

  AddRole(role:Addrole):Observable<any>
  {
    return this._HttpClient.post(`${Url.baseurl}/api/Users/add-role`,role)
  }

  Bolcked(blockId:any):Observable<any>
  {
    return this._HttpClient.put<any>(`${Url.baseurl}/api/Users/${blockId}/toggle-status`, '')
  }
}
