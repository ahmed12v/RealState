import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Url } from '../bases/base-url';

@Injectable({
  providedIn: 'root'
})
export class LanchWorkService {

  constructor(private _HttpClient:HttpClient) { }

  AddLanch(lacnhData:FormData):Observable<any>
  {
    const token = localStorage.getItem('token');
         const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._HttpClient.post(`${Url.baseurl}/Launch/Add`,lacnhData, {headers:headers})
  }

  UpdateLanch(id:any , updateform:FormData):Observable<any>
  {
    const token = localStorage.getItem('token');
         const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
   return this._HttpClient.put<any>(`${Url.baseurl}/Launch/Edit/${id}`,updateform, {headers:headers})
  }

  DeletLanch(id:any):Observable<any>
  {
    const token = localStorage.getItem('token');
         const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._HttpClient.delete(`${Url.baseurl}/Launch/Delete/${id}`, {headers:headers})
  }

}
