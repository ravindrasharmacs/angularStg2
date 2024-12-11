import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable , throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private apiUrl = 'https://api.restful-api.dev/objects';

  constructor() { }

  //Get request
  getData(){
    fetch('https://api.restful-api.dev/objects')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('There was a problem with the fetch operation:', error));

  }

  }
  //Post request
  // postData<T>(endpoint: string, data: any): Observable<T> {
  //   return this.http.post<T>(`${this.apiUrl}/${endpoint}`, data).pipe(
  //     catchError(this.handleError)
  //     );
  // }
  // //Put request
  // updateData<T>(endpoint: string, data: any): Observable<T> {
  //   return this.http.put<T>(`${this.apiUrl}/${endpoint}`, data).pipe(
  //     catchError(this.handleError)
  //     );
  // }
  // //Delete request
  // deleteData<T>(endpoint: string): Observable<T> {
  //   return this.http.delete<T>(`${this.apiUrl}/${endpoint}`).pipe(
  //     catchError(this.handleError)
  //     );
  // }
/*
  private getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }
  private handleError(error: any) {
    console.error('An error occurred', error);
    return throwError(error.message || error);
  }
    */


