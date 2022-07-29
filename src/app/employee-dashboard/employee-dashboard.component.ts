import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../Services/employee/employee.service';

// import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
// import { Employee } from '../model/employee-dashboard.model';
// import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css'],
})
export class EmployeeDashboardComponent implements OnInit {

  public employeeForm !:FormGroup;
  public educationOptions = [
    '10th pass',
    'Diploma',
    'Graduate',
    'Post Graduate',
    'PhD',
  ];

  constructor(private formBuilder : FormBuilder, private employeeService : EmployeeService, private router:Router) {

  }

  ngOnInit(): void {
    this.employeeForm=this.formBuilder.group({
      name: [""],
      birthdate: [""],
      email: [{value:"", disabled:true}],
      contact: [""],
      gender: [""],
      education: [""],
      department: [""],
      jobExperience: '',
      salary: '',
      profile: [""],
      joiningdate: "",
    })
    this.getEmployeeDetails();
  }

  getEmployeeDetails(){
    console.log("I am Getting employee details")
    this.employeeService.getEmployeeDetailesById()
    .subscribe({
      next:(res)=>{
        console.log(res);
        console.log(res.profile)

        this.employeeForm.setValue({
          name: res.name,
          birthdate: res.birthdate,
          email: res.email,
          contact: res.contact,
          gender: res.gender,
          education: res.education,
          department: res.department,
          jobExperience: res.jobExperience,
          salary: res.salary,
          joiningdate: res.joiningdate,
          profile: res.profile,
        });

      },
      error:(err)=>{console.log(err)}
    })
  }

  Insert(){
    console.log("Add Employee Details");
    console.log(this.employeeForm.value);
    this.employeeService.AddEmployeeDetails(this.employeeForm.value)
    .subscribe({
      next:(res)=>{
        alert("Employee Details Added Sucessfully");
        console.log(res);
        this.getEmployeeDetails();
      },
      error:(err)=>{
        if(err.status == 200)
        {
          alert("Employee Details Added Sucessfull");
        }
        else{
          alert("Failed to Update");
          console.log(err)
        }
      }
    })
  }



  }
