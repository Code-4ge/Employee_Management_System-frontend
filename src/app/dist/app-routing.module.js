"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var about_component_1 = require("./about/about.component");
var admin_dashboard_component_1 = require("./admin-dashboard/admin-dashboard.component");
var alogin_component_1 = require("./alogin/alogin.component");
var contact_us_component_1 = require("./contact-us/contact-us.component");
// import { DepartmentDashboardComponent } from './department-dashboard/department-dashboard.component';
var employee_dashboard_component_1 = require("./employee-dashboard/employee-dashboard.component");
var error_page_component_1 = require("./error-page/error-page.component");
// import { FooterComponent } from './footer/footer.component';
var home_component_1 = require("./home/home.component");
var login_component_1 = require("./login/login.component");
var auth_guard_1 = require("./Services/Authentication/auth.guard");
var signup_component_1 = require("./signup/signup.component");
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'signup', component: signup_component_1.SignupComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'contact', component: contact_us_component_1.ContactUsComponent },
    { path: 'dashboard', component: employee_dashboard_component_1.EmployeeDashboardComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'alogin', component: alogin_component_1.ALoginComponent },
    { path: 'admin-dashboard', component: admin_dashboard_component_1.AdminDashboardComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: '**', component: error_page_component_1.ErrorPageComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
