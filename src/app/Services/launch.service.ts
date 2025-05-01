import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { launch } from '../interfaces/home';
import { Url } from '../bases/base-url';

@Injectable({
  providedIn: 'root'
})
export class LaunchService {

  constructor(private _HttpClient:HttpClient) { }

  lachById(lanchId:any):Observable<launch>
  {
     const token = localStorage.getItem('token');
             const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._HttpClient.get<launch>(`${Url.baseurl}/Launch/Get/${lanchId}`,{headers:headers})
  }
}
