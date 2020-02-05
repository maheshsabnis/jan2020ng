import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseData, Register, Login, Product } from '../../app/models/app.secure.models';

@Injectable({providedIn: 'root'})
export class SecureService {
  private url: string;
  constructor(private httpClient: HttpClient) {
    this.url = "http://localhost:5000";
   }

   createUser(user: Register): Observable<ResponseData> {
      let resp:Observable<ResponseData> = null;
      const options = {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      } ;
      resp = this.httpClient.post<ResponseData>(`${this.url}/api/Auth/Register`, user, options);
      return resp;
   }

   login(user: Login): Observable<ResponseData> {
    let resp:Observable<ResponseData> = null;
    const options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    } ;
    resp = this.httpClient.post<ResponseData>(`${this.url}/api/Auth/Login`, user, options);
    return resp;
 }

 getData(token: string): Observable<Product[]> {
   let resp:Observable<Product[]> = null;
   const options = {
    headers: new HttpHeaders({
       "AUTHORIZATION": `Bearer ${token}`
    })
   } ;
   resp = this.httpClient.get<Product[]>(`${this.url}/api/Products`, options); 
   return resp;
 }
}