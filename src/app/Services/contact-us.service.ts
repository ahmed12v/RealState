import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactUs } from '../interfaces/contact-us';
import { Url } from '../bases/base-url';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(private _HttpClient:HttpClient) { }

  SendContact(contactmember:ContactUs):Observable<any>
  {
     return this._HttpClient.post(`${Url.baseurl}/ContactLead/Add`,contactmember)
  }
}
