import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }
  getData():Observable<any>{
    return this.httpClient.get<any>(
      'https://my-json-server.typicode.com/mabukoush1/contacts/db'
    )
  }
}
