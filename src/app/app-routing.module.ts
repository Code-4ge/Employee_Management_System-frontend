import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ALoginComponent } from './alogin/alogin.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
// import { DepartmentDashboardComponent } from './department-dashboard/department-dashboard.component';
 import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';

import { ErrorPageComponent } from './error-page/error-page.component';
// import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './Services/Authentication/auth.guard';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path: 'login',component:LoginComponent},
  {path: 'signup',component:SignupComponent},
  {path: 'home',component:HomeComponent},
  {path: 'about',component:AboutComponent},
  {path: 'contact',component:ContactUsComponent},
  {path: 'dashboard',component:EmployeeDashboardComponent,canActivate: [AuthGuard]},
  {path: 'alogin',component:ALoginComponent},
  {path: 'admin-dashboard',component:AdminDashboardComponent,canActivate: [AuthGuard]},
  {path: '**',component:ErrorPageComponent},
  // {path: 'department',component:DepartmentDashboardComponent},
  // {path: 'footer',component:FooterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
