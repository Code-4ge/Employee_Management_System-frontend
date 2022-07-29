import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeLoginService } from '../Services/employee-login/employee-login.service';
import { EmployeeSignupService } from '../Services/employee-signup/employee-signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm !:FormGroup;

  constructor(private formBuilder : FormBuilder, private employeeSignupService : EmployeeSignupService, private router:Router) { }

  ngOnInit(){
    this.signupForm=this.formBuilder.group({
        name:[''],
        email: [''],
        pass: ['']
    })
  }
  signUp(){
      console.log("Sign up");
      console.log(this.signupForm.value);
      const password = this.signupForm.value.pass;
      if(password.match(/[a-z]/g) && password.match(/[A-Z]/g) && password.match(/[0-9]/g) && password.match(/[^a-zA-Z\d]/g) && password.length >= 8){
        console.log("TRUE");
        this.employeeSignupService.registerEmployee(this.signupForm.value)
        .subscribe({
          next:(res)=>{
            console.log(res);
            alert("SignUp Successful");
            this.signupForm.reset();
            this.router.navigate(['login']);
          },
          error:(err)=>{
            console.log(err);
            alert("User Already Exist!!");
          }
        })
      }
      else{
        alert("Enter valid password")
      }

  }

}
