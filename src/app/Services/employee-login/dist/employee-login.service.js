"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EmployeeLoginService = void 0;
var core_1 = require("@angular/core");
var EmployeeLoginService = /** @class */ (function () {
    function EmployeeLoginService(http) {
        this.http = http;
        this.baseUrl = "https://localhost:7011/api/EmployeeDetail";
    }
    EmployeeLoginService.prototype.employeelogin = function (credential) {
        return this.http.post(this.baseUrl + "/login", credential);
    };
    EmployeeLoginService.prototype.employeeToken = function (token) {
        sessionStorage.setItem("token", token);
    };
    EmployeeLoginService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], EmployeeLoginService);
    return EmployeeLoginService;
}());
exports.EmployeeLoginService = EmployeeLoginService;
