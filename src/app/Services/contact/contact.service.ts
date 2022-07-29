import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  baseUrl = "https://localhost:7011/api/ContactUs";

  constructor(private http: HttpClient) { }

  sendMessage(message:any):Observable<any>{
    return this.http.post<any>(this.baseUrl, message);
  }
}
