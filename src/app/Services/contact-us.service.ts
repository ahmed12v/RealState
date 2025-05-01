import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactUs, emp, lead } from '../interfaces/contact-us';
import { Url } from '../bases/base-url';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(private _HttpClient:HttpClient) { }

  SendContact(contactmember:ContactUs):Observable<any>
  {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
     return this._HttpClient.post(`${Url.baseurl}/ContactLead/Add`,contactmember ,{headers:headers})
  }

  getToAdmin():Observable<lead>
  {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this._HttpClient.get<lead>(`${Url.baseurl}/ContactLead/All`,{headers:headers})
  }

  getAllEmp():Observable<emp>
  {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this._HttpClient.get<emp>(`${Url.baseurl}/api/Users/GetAllEmployees`,{headers:headers})
  }

  Assigned(employeeId:string , id:number):Observable<any>
  {
    //send tokken
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);


    //params 
    // const params = new HttpParams()
    // .set('id',id)
    // .set('employeeId' , employeeId)

    return this._HttpClient.post(`${Url.baseurl}/ContactLead/Assign?id=${id}&employeeId=${employeeId}`,'', {headers:headers} )
  }

  markDone(putid:any):Observable<any>
  {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this._HttpClient.put<any>(`${Url.baseurl}/ContactLead/MarkAsDone/${putid}`,'',{headers:headers})
  }
}
