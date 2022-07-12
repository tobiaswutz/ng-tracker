import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  private baseUrl = 'http://localhost:3000/';

  constructor(
    private http: HttpClient,
  ) { }

  public getCall(endpoint: string, body: any): Observable<any> {
    return this.http.get(this.baseUrl + endpoint, body);
  }

  public postCall(endpoint: string, body: any): Observable<any> {
    return this.http.post(this.baseUrl + endpoint, body);
  }

  public putCall(endpoint: string, body: any): Observable<any> {
    return this.http.put(this.baseUrl + endpoint, body);
  }

  public deleteCall(endpoint: string, body: any): Observable<any> {
    return this.http.delete(this.baseUrl + endpoint, body);
  }
}
