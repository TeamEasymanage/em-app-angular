import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
   
  })
};

@Injectable({
  providedIn: 'root'
})
export class EmService {
  webapi:any ="http://127.0.0.1:9080/emdbrest/";

  constructor(private http: HttpClient) {
  }

  //Add Record : Create
  POSTRecord(AddForm: any,url:any): Observable<any> {
    return this.http.post<any>(this.webapi + url, AddForm, httpOptions)
          .pipe(catchError(err => {
            console.error('error in calling api post : ' , err);
            alert ( 'error in calling api post : please see console');
            throw 'error in calling api post  ';
          })
          );
  }

  //View All Records
  GETRecord(url:any):Observable<any>
  {
   return this.http.get<any>(this.webapi + url, {observe: 'response'})
          .pipe(catchError(err => {
            console.error('error in calling api get : ' , err);
            alert ( 'error in calling api get : please see console');
            throw 'error in calling api get ';
            ;
          })
          );
  }
}
