import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    const token = localStorage.getItem('token');
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  return this._HttpClient.get<User>(`${Url.baseurl}/api/Users`,{headers:headers})
  }

  AddRole(role:Addrole):Observable<any>
  {
    const token = localStorage.getItem('token');
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._HttpClient.post(`${Url.baseurl}/api/Users/add-role`,role,{headers:headers})
  }

   remove(role:Addrole):Observable<any>
  {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._HttpClient.post(`${Url.baseurl}/api/Users/remove-role`,role,{headers:headers})
  }

  Bolcked(blockId:any):Observable<any>
  {
    const token = localStorage.getItem('token');
          const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._HttpClient.put<any>(`${Url.baseurl}/api/Users/${blockId}/toggle-status`, '',{headers:headers})
  }
}
