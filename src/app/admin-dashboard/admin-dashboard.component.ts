import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Services/admin/admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  public E_details:any;

  constructor(private adminService : AdminService) { }

  ngOnInit() {
    this.E_details = {
      id:"",
      name:"",
      email:"",
      contact:"",
      joiningdate:"",
      department:"",
    }
    this.getEmployeeAllDetails();
  }

  getEmployeeAllDetails() {
    this.adminService.getAllEmployee()
    .subscribe({
      next:(res)=>{
        console.log(res);
        this.E_details = res;
      },
      error:(err)=>{console.log(err)}
    })
  }

  deleteEmployee(employeeId:string){
    this.adminService.deleteEmployeeById(employeeId)
    .subscribe({
      next:(res)=>{
        alert("Deleted Sucessfully");
        this.getEmployeeAllDetails();
        console.log(res);
      },
      error:(err)=>{
        if(err.status == 200)
        {
          alert("Deleted Sucessfully");
          this.getEmployeeAllDetails();
        }
        else{
          alert("Failed Delete")
          console.log(err)
        }

      }
    })
  }

}

