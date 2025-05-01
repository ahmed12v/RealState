import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, launch, SendFelter } from '../interfaces/home';
import { Observable } from 'rxjs';
import { Url } from '../bases/base-url';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _HttpClient:HttpClient) { }

  // Post

  Filter(sendForm:SendFelter):Observable<filter>
  {
     const token = localStorage.getItem('token');
     const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  return this._HttpClient.post<filter>(`${Url.baseurl}/Property/Search` , sendForm ,{headers:headers} )
  }

  // Get

  AllSell():Observable<filter>
  {
    const token = localStorage.getItem('token');
     const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

     return this._HttpClient.get<filter>(`${Url.baseurl}/Property/GetAllSell` ,{headers:headers})
  }

  AllRent():Observable<filter>
  {
    const token = localStorage.getItem('token');
     const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
     return this._HttpClient.get<filter>(`${Url.baseurl}/Property/GetAllRent`,{headers:headers})
  }

  GetAllLaunches():Observable<launch>
  {
    const token = localStorage.getItem('token');
     const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._HttpClient.get<launch>(`${Url.baseurl}/Launch/GetAll`,{headers:headers})
  }


}
