// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup  }  from '@angular/forms';
// import { Department } from '../model/department.model';
// import { DepartmentService } from '../Services/department/department.service';




// @Component({
//   selector: 'app-department-dashboard',
//   templateUrl: './department-dashboard.component.html',
//   styleUrls: ['./department-dashboard.component.css']
// })
// export class DepartmentComponent implements OnInit {

//  depDetail !: FormGroup;
//  depObj : Department = new Department();
//  depList : Department[] = [];


//   constructor(private formBuilder : FormBuilder, private depService : DepartmentService ) { }


//   ngOnInit(): void {
//     // this.getDepartment();

//     this.depDetail = this.formBuilder.group({
//       DepartmentId: [''],
//       DepartmentName: [''],
//     });

//   }
//   addDepartment() {
//     console.log(this.depDetail);
//     this.depObj.DepartmentId = this.depDetail.value.DepartmentId;
//     this.depObj.DepartmentName = this.depDetail.value.DepartmentName;

//   //   this.depService.postDepartment(this.depObj).subscribe(res=>{
//   //     console.log(res);
//   //     this.getDepartment();
//   //   },err=>{
//   //     console.log(err);
//   //   });

//   // }
//   // getDepartment() {

//   //   this.depService.getDepartment().subscribe(res=>{
//   //     this.depList = res;
//   //   },err=>{
//   //     console.log("error while fetching data.")
//   //   });
//   // }

//   // deleteDepartment(dep: Department) {

//   //   this.depService.deleteDepartment(dep).subscribe(res=>{
//   //     console.log(res);
//   //     alert('Department deleted successfully');
//   //     this.getDepartment();
//   //   },err => {
//   //     console.log(err);
//   //   });

//   }


// }
