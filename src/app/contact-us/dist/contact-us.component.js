"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ContactUsComponent = void 0;
var core_1 = require("@angular/core");
var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent(formBuilder, contactService, router) {
        this.formBuilder = formBuilder;
        this.contactService = contactService;
        this.router = router;
    }
    ContactUsComponent.prototype.ngOnInit = function () {
        this.contactForm = this.formBuilder.group({
            name: [""],
            email: [''],
            phone: [""],
            body: ['']
        });
    };
    ContactUsComponent.prototype.sendMail = function () {
        var _this = this;
        this.contactService.sendMessage(this.contactForm.value)
            .subscribe({
            next: function (res) {
                console.log(res);
                alert("Message Sent");
                _this.router.navigate(['contact']);
            },
            error: function (err) {
                if (err.status == 200) {
                    alert("Message Sent");
                    _this.router.navigate(['contact']);
                }
                else {
                    console.log(err);
                    alert("Unable to Send Message");
                }
            }
        });
    };
    ContactUsComponent = __decorate([
        core_1.Component({
            selector: 'app-contact-us',
            templateUrl: './contact-us.component.html',
            styleUrls: ['./contact-us.component.css']
        })
    ], ContactUsComponent);
    return ContactUsComponent;
}());
exports.ContactUsComponent = ContactUsComponent;
