import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeLoginService {

  baseUrl = "https://localhost:7011/api/EmployeeDetail";

  constructor( private http: HttpClient) { }

  employeelogin(credential:any):Observable<any>{
    return this.http.post<any>(this.baseUrl + "/login", credential)
  }

  employeeToken(token:any):void{
    sessionStorage.setItem("token", token);
  }
}
