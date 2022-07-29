import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router : Router) { }

  loggedIn(){
    return !!sessionStorage.getItem("token");
  }

  logout(){
    if(this.loggedIn())
    {
      sessionStorage.removeItem("token");
      this.router.navigate(['home']);
    }
  }
}
