import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl = "https://localhost:7011/api/EmployeeDetail";

  constructor( private http: HttpClient) { }

  getEmployeeDetailesById():Observable<any>{
    var token = sessionStorage.getItem("token");
    return this.http.get<any>(this.baseUrl + "/"+token);
  }

  AddEmployeeDetails(details:any):Observable<any>{
    var token = sessionStorage.getItem("token");
    return this.http.put<any>(this.baseUrl + "/addEmployeeDetails/" + token, details)
  }
}
