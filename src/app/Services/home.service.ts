import { HttpClient } from '@angular/common/http';
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
  return this._HttpClient.post<filter>(`${Url.baseurl}/Property/Search` , sendForm)
  }

  // Get

  AllSell():Observable<filter>
  {
     return this._HttpClient.get<filter>(`${Url.baseurl}/Property/GetAllSell`)
  }

  AllRent():Observable<filter>
  {
     return this._HttpClient.get<filter>(`${Url.baseurl}/Property/GetAllRent`)
  }

  GetAllLaunches():Observable<launch>
  {
    return this._HttpClient.get<launch>(`${Url.baseurl}/Launch/GetAll`)
  }


}
