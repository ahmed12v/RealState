import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from '../interfaces/home';
import { Url } from '../bases/base-url';

@Injectable({
  providedIn: 'root'
})
export class SellsService {

  constructor(private _HttpClient:HttpClient) { }

  getApartment(partId:any):Observable<filter>
  {
    const token = localStorage.getItem('token');
          const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._HttpClient.get<filter>(`${Url.baseurl}/Property/GetSell/${partId}`,{headers:headers})
  }

  Add(data : FormData):Observable<any>
  {
    const token = localStorage.getItem('token');
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._HttpClient.post<any>(`${Url.baseurl}/Property/AddSell`, data,{headers:headers})
  }

  Update(id:any , form:FormData):Observable<any>
  {
    const token = localStorage.getItem('token');
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._HttpClient.put(`${Url.baseurl}/Property/EditSell/${id}`,form,{headers:headers})
  }

  Delet(id:any):Observable<any>
  {
    const token = localStorage.getItem('token');
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._HttpClient.delete(`${Url.baseurl}/Property/DeleteSell/${id}`,{headers:headers})
  }
}
