import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeSignupService {

  baseUrl = "https://localhost:7011/api/EmployeeDetail";

  constructor( private http: HttpClient) { }

  // Register Employee
  registerEmployee(employeeDetail : any) : Observable<any>{
    return this.http.post<any>(this.baseUrl + "/register", employeeDetail )
  }
}
