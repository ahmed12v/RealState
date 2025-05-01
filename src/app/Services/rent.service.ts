import { Injectable } from '@angular/core';
import { filter } from '../interfaces/home';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Url } from '../bases/base-url';

@Injectable({
  providedIn: 'root'
})
export class RentService {

  constructor(private _HttpClient:HttpClient) { }
   
  AllRent():Observable<filter>
    {
       const token = localStorage.getItem('token');
                   const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
       return this._HttpClient.get<filter>(`${Url.baseurl}/Property/GetAllRent`,{headers:headers})
    }

    Add(data : FormData):Observable<any>
    {
      const token = localStorage.getItem('token');
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this._HttpClient.post<any>(`${Url.baseurl}/Property/AddRent`, data,{headers:headers})
    }
  
    Update(id:any , form:FormData):Observable<any>
    {
      const token = localStorage.getItem('token');
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this._HttpClient.put(`${Url.baseurl}/Property/EditRent/${id}`,form,{headers:headers})
    }
  
    Delet(id:any):Observable<any>
    {
      const token = localStorage.getItem('token');
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this._HttpClient.delete(`${Url.baseurl}/Property/DeleteRent/${id}`,{headers:headers})
    }
}
