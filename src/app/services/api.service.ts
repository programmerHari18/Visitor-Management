import { Injectable } from '@angular/core';
import { environment } from '../../../environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = environment.apiBaseUrl
  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  private handleError(error: HttpErrorResponse){
    let errorMsg = 'Something went wrong';
    if(error.error?.message)  errorMsg = error.error.message;
    else if(error.status) errorMsg = `Error ${error.status}: ${error.statusText}`;

    this.snackBar.open(errorMsg, 'Close', {duration: 3000});
    return throwError(() => new Error(errorMsg));
  }

  get<T>(endpoint: string, params?: any) {
    return this.http.get<T>(`${this.baseUrl}/${endpoint}`, { params })
      .pipe(catchError(this.handleError.bind(this)));
  }
  post<T>(endpoint: string, body: any) {
    return this.http.post<T>(`${this.baseUrl}/${endpoint}`, body)
      .pipe(catchError(this.handleError.bind(this)));
  }

  put<T>(endpoint: string, body: any) {
    return this.http.put<T>(`${this.baseUrl}/${endpoint}`, body)
      .pipe(catchError(this.handleError.bind(this)));
  }

  delete<T>(endpoint: string) {
    return this.http.delete<T>(`${this.baseUrl}/${endpoint}`)
      .pipe(catchError(this.handleError.bind(this)));
  }
}
