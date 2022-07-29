import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
// import { Alogin } from '../model/alogin.model';
import { AdminLoginService } from '../Services/admin-login/admin-login.service';

@Component({
  selector: 'app-alogin',
  templateUrl: './alogin.component.html',
  styleUrls: ['./alogin.component.css']
})
export class ALoginComponent implements OnInit {

  public adminForm !:FormGroup;

  constructor(private formBuilder : FormBuilder, private adminLoginService : AdminLoginService, private router:Router) { }

  ngOnInit() {
    this.adminForm=this.formBuilder.group({
      email: [""],
      pass: [""],
    });
  }

  adminLogin(){
    console.log("Admin Login");
    console.log(this.adminForm.value);
    const password = this.adminForm.value.pass;
    if(password.match(/[a-z]/g) && password.match(/[A-Z]/g) && password.match(/[0-9]/g) && password.match(/[^a-zA-Z\d]/g) && password.length >= 8){
      console.log("TRUE");
      this.adminLoginService.adminlogin(this.adminForm.value)
      .subscribe({
        next:(res)=>{
          console.log(res);
          alert("Login Successful");
          this.adminLoginService.adminToken(res.id);
          this.adminForm.reset();
          this.router.navigate(['admin-dashboard']);
        },
        error:(err)=>{
          console.log(err);
          alert("Invalid Credentials, Please Enter valid details");
        }
      })
    }
  }

}
