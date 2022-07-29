import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeLoginService } from '../Services/employee-login/employee-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm !:FormGroup;

  constructor(private formBuilder : FormBuilder, private employeeLoginService : EmployeeLoginService, private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email: [''],
      pass: ['']
    })
  }

  Login(){
    console.log("Login");
    console.log(this.loginForm.value);
    const password = this.loginForm.value.pass;
    if(password.match(/[a-z]/g) && password.match(/[A-Z]/g) && password.match(/[0-9]/g) && password.match(/[^a-zA-Z\d]/g) && password.length >= 8){
      console.log("TRUE");
      this.employeeLoginService.employeelogin(this.loginForm.value)
      .subscribe({
        next:(res)=>{
          console.log(res);
          alert("Login Successful");
          this.employeeLoginService.employeeToken(res.id);
          this.loginForm.reset();
          this.router.navigate(['dashboard']);
        },
        error:(err)=>{
          console.log(err);
          alert("Invalid Credentials, Please Enter valid details");
        }
      })
    //   this.http.post<any>("http://localhost:3000/SignupUsers",this.loginForm.value)
    // .subscribe (res=>{

    //   alert("Login Successful");
    //   this.loginForm.reset();
    //   this.router.navigate(['login']);
    // },err=>{
    //   alert("Something is Wrong")
    // })
    }
    else{
      alert("Enter valid password")
    }
  }

}
