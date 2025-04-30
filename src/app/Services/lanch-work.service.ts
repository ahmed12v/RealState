import { HttpClient } from '@angular/common/http';
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
    return this._HttpClient.post(`${Url.baseurl}/Launch/Add`,lacnhData)
  }

  UpdateLanch(id:any , updateform:FormData):Observable<any>
  {
   return this._HttpClient.put<any>(`${Url.baseurl}/Launch/Edit/${id}`,updateform)
  }

  DeletLanch(id:any):Observable<any>
  {
    return this._HttpClient.delete(`${Url.baseurl}/Launch/Delete/${id}`)
  }

}
