import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, throwError } from 'rxjs';
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
    protected http: HttpClient,
    private router: Router
  ) { }

  private handleError(error){
    if (error.status === 403) {
      // Redirect to login page if status is 403 Forbidden
      this.router.navigate(['/login']);
    }
    // Rethrow the error so the subscriber can handle it
    return throwError(() => error);
  }

  getAll(params? : any): Observable<T> {
    return this.http.get<T>(this.endpoint, {params: params}).pipe(catchError((error: HttpErrorResponse) => this.handleError(error)));
  }

  get(id: number): Observable<T> {
    return this.http.get<T>(`${this.endpoint}/${id}`).pipe(catchError((error: HttpErrorResponse) => this.handleError(error)));;
  }

  delete(id:number): Observable<any> {
    return this.http.delete<any>(`${this.endpoint}/${id}`).pipe(catchError((error: HttpErrorResponse) => this.handleError(error)));;
  }

  update(id:number, data:T): Observable<T> {
    return this.http.put<T>(`${this.endpoint}/${id}`, data).pipe(catchError((error: HttpErrorResponse) => this.handleError(error)));;
  }

  create(data?: T): Observable<T>{
    return this.http.post<T>(`${this.endpoint}`, data).pipe(catchError((error: HttpErrorResponse) => this.handleError(error)));;
  }

  getEnum(path:string): Observable<any>{
    return this.http.get(`${this.endpoint}/enum/${path}`).pipe(catchError((error: HttpErrorResponse) => this.handleError(error)));
  }
}
