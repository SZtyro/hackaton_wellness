import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

export type FilteredResult<T = any> = {
  results: T[];
  totalCount:number;
}

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService<T = any> {

  abstract endpoint:string;

  constructor(
    protected http: HttpClient
  ) { }

  getAll(params? : any): Observable<T> {
    return this.http.get<T>(this.endpoint, {params: params});
  }

  get(id: number): Observable<T> {
    return this.http.get<T>(`${this.endpoint}/${id}`);
  }

  delete(id:number): Observable<any> {
    return this.http.delete<any>(`${this.endpoint}/${id}`);
  }

  update(id:number, data:T): Observable<T> {
    return this.http.put<T>(`${this.endpoint}/${id}`, data);
  }

  create(data?: T): Observable<T>{
    return this.http.post<T>(`${this.endpoint}`, data);
  }

  getEnum(path:string): Observable<any>{
    return this.http.get(`${this.endpoint}/enum/${path}`)
  }
}
