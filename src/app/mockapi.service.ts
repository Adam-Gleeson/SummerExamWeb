import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs';
import { InterfaceStaffTs } from './interface-staff';

@Injectable({
  providedIn: 'root'
})
export class MockapiService {

  constructor(private _http: HttpClient) { }
  private _siteURL: string = 'https://6470a0a63de51400f724ab48.mockapi.io/api/v1/staffDetails';

  getStaffDetails():Observable<InterfaceStaffTs[]> {
    return this._http.get<InterfaceStaffTs[]>(this._siteURL)
 
    .pipe(
      tap(data => console.log('data/error' + JSON.stringify(data))
    ),
    catchError(this.handleError)
    );
  }

  private handleError(err:HttpErrorResponse) {
    return throwError(() => new Error("mockapi service:" + err.message))
  }
}
