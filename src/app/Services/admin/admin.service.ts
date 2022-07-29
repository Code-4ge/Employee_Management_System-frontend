import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl = "https://localhost:7011/api/AdminDetail";

  constructor( private http: HttpClient) { }

  getAllEmployee():Observable<any>{
    var token = sessionStorage.getItem("token")
    return this.http.get<any>(this.baseUrl + "/" + token);
  }

  deleteEmployeeById(Id:string):Observable<any>{
    var token = sessionStorage.getItem("token");
    return this.http.delete<any>(this.baseUrl + "/deleteEmployee/" + token + "/" + Id);
  }
}
