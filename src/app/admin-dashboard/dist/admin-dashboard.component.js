"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminDashboardComponent = void 0;
var core_1 = require("@angular/core");
var AdminDashboardComponent = /** @class */ (function () {
    function AdminDashboardComponent(adminService) {
        this.adminService = adminService;
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
        this.E_details = {
            id: "",
            name: "",
            email: "",
            contact: "",
            joiningdate: "",
            department: ""
        };
        this.getEmployeeAllDetails();
    };
    AdminDashboardComponent.prototype.getEmployeeAllDetails = function () {
        var _this = this;
        this.adminService.getAllEmployee()
            .subscribe({
            next: function (res) {
                console.log(res);
                _this.E_details = res;
            },
            error: function (err) { console.log(err); }
        });
    };
    AdminDashboardComponent.prototype.deleteEmployee = function (employeeId) {
        var _this = this;
        this.adminService.deleteEmployeeById(employeeId)
            .subscribe({
            next: function (res) {
                alert("Deleted Sucessfully");
                _this.getEmployeeAllDetails();
                console.log(res);
            },
            error: function (err) {
                if (err.status == 200) {
                    alert("Deleted Sucessfully");
                    _this.getEmployeeAllDetails();
                }
                else {
                    alert("Failed Delete");
                    console.log(err);
                }
            }
        });
    };
    AdminDashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-admin-dashboard',
            templateUrl: './admin-dashboard.component.html',
            styleUrls: ['./admin-dashboard.component.css']
        })
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}());
exports.AdminDashboardComponent = AdminDashboardComponent;
