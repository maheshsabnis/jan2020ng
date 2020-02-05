import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs'
import { Product } from '../../app/models/app.product.model';
@Injectable()
export class HttpService {
  
  private url : string;

  // HttpClient, is resolved by HttpClientModule
  // used for get<T>/post<T>/put<T>/delete<T>
  // T is the type of data used in Http Communication
  // All these methods return Observable<T>
  constructor(private http: HttpClient) { 
    this.url = "https://apiapptrainingnewapp.azurewebsites.net/api/products";
  }

  getData(): Observable<Product[]> {
    let resp: Observable<Product[]> = null;
    resp = this.http.get<Product[]>(this.url);
    return resp;
  }

  postData(prd: Product): Observable<Product> {
    let resp: Observable<Product> = null;
    const options = {
       headers: new HttpHeaders({
         'Content-Type':'application/json'
       })
    };
    resp = this.http.post<Product>(this.url, prd, options);
    return resp;
  }

  putData(id: number, prd: Product): Observable<Product> {
    let resp: Observable<Product> = null;
    const options = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
   };
    resp = this.http.put<Product>(`${this.url}/${id}`, prd, options);
    return resp;
  }

  deleteData(id: number): Observable<boolean> {
    let resp: Observable<boolean> = null;
    resp = this.http.delete<boolean>(`${this.url}/${id}`);
    return resp;
  }



}
