import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
// // import { DepartmentDashboardComponent } from './department-dashboard/department-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ALoginComponent } from './alogin/alogin.component';
import { SignupComponent } from './signup/signup.component';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AuthGuard } from './Services/Authentication/auth.guard';
import { AuthService } from './Services/Authentication/auth.service';
// import { DepartmentComponent } from './Services/Department/department/department.component';
// import { EmployeeComponent } from './employee/employee.component';
// import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    EmployeeDashboardComponent,
    HeaderComponent,
    SideNavComponent,
    AboutComponent,
    ContactUsComponent,
    ErrorPageComponent,
    ALoginComponent,
    SignupComponent,
    AdminDashboardComponent,
    // DepartmentComponent,

    // FooterComponent
  ],
  imports: newFunction(),
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule { }
function newFunction() {
  return [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ];
}

