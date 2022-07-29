import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  baseUrl = "https://localhost:7011/api/AdminDetail";

  constructor( private http: HttpClient) { }

 adminlogin(credential:any):Observable<any>{
    return this.http.post<any>(this.baseUrl + "/login", credential)
  }

  adminToken(token:any):void{
    sessionStorage.setItem("token", token);
  }
}
