import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {Hostdetails} from './hostdetails';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  serverUrl: string = 'https://137.135.82.88/hostdetails/hostdetailsSpringApp';

   // Rest Items Service: Read all REST Items
   GetRestItems() {
    return this.http.get<Hostdetails[]>(this.serverUrl)
      .pipe(map(data => data));
  }
    
}
