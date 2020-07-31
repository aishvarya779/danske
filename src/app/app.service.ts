import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private _http: HttpClient) {}

  getData() {
    return this._http
      .get('./assets/mockData.json')
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errMsg;
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
      errMsg = error.error.message;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );

      errMsg =
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`;
    }
    // Return an observable with a user-facing error message.
    return throwError(errMsg);
  }
}
