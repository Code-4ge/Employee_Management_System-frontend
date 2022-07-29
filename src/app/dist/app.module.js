"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var login_component_1 = require("./login/login.component");
var employee_dashboard_component_1 = require("./employee-dashboard/employee-dashboard.component");
// // import { DepartmentDashboardComponent } from './department-dashboard/department-dashboard.component';
var header_component_1 = require("./header/header.component");
var side_nav_component_1 = require("./side-nav/side-nav.component");
var about_component_1 = require("./about/about.component");
var contact_us_component_1 = require("./contact-us/contact-us.component");
var error_page_component_1 = require("./error-page/error-page.component");
var alogin_component_1 = require("./alogin/alogin.component");
var signup_component_1 = require("./signup/signup.component");
var common_1 = require("@angular/common");
var admin_dashboard_component_1 = require("./admin-dashboard/admin-dashboard.component");
var auth_guard_1 = require("./Services/Authentication/auth.guard");
var auth_service_1 = require("./Services/Authentication/auth.service");
// import { DepartmentComponent } from './Services/Department/department/department.component';
// import { EmployeeComponent } from './employee/employee.component';
// import { FooterComponent } from './footer/footer.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                login_component_1.LoginComponent,
                employee_dashboard_component_1.EmployeeDashboardComponent,
                header_component_1.HeaderComponent,
                side_nav_component_1.SideNavComponent,
                about_component_1.AboutComponent,
                contact_us_component_1.ContactUsComponent,
                error_page_component_1.ErrorPageComponent,
                alogin_component_1.ALoginComponent,
                signup_component_1.SignupComponent,
                admin_dashboard_component_1.AdminDashboardComponent,
            ],
            imports: newFunction(),
            providers: [auth_service_1.AuthService, auth_guard_1.AuthGuard],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
function newFunction() {
    return [
        platform_browser_1.BrowserModule,
        app_routing_module_1.AppRoutingModule,
        forms_1.ReactiveFormsModule,
        http_1.HttpClientModule,
        common_1.CommonModule
    ];
}
