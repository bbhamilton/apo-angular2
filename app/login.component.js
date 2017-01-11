"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require('@angular/router');
var LoginComponent = (function () {
    function LoginComponent(router) {
        this.router = router;
        // url = 'http://bilicki.stronazen.pl/apo';
        // url = 'http://localhost:3000';
        this.url = 'https://apo.devmerix.com';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            template: "<div class=\"google_loginpage\">\n    <div class=\"google_container\">\n      <img class=\"apocalypternet_logo\" src=\"src/images/logo.png\" alt=\"Apocalypternet logo\">\n      <a class=\"google_btn\" href=\"https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile&state=apocalypternet&redirect_uri={{url}}&response_type=token&client_id=893501278614-5ho55ulpm5gl9pi8rftto31ce3trp9qn.apps.googleusercontent.com\">\n        Log in with Google Account\n      </a>\n    </div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQW1DLGVBQWUsQ0FBQyxDQUFBO0FBQ25ELHVCQUFtQyxpQkFBaUIsQ0FBQyxDQUFBO0FBZ0JyRDtJQUtFLHdCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUhsQywyQ0FBMkM7UUFDM0MsaUNBQWlDO1FBQ2pDLFFBQUcsR0FBRyx5QkFBeUIsQ0FBQztJQUNNLENBQUM7SUFFdkMsaUNBQVEsR0FBUjtJQUVBLENBQUM7SUF2Qkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE9BQU87WUFDakIsUUFBUSxFQUNSLGtmQVFDO1NBQ0YsQ0FBQzs7c0JBQUE7SUFhRixxQkFBQztBQUFELENBWEEsQUFXQyxJQUFBO0FBWFksc0JBQWMsaUJBVzFCLENBQUEiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9ICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xvZ2luJyxcbiAgdGVtcGxhdGU6XG4gIGA8ZGl2IGNsYXNzPVwiZ29vZ2xlX2xvZ2lucGFnZVwiPlxuICAgIDxkaXYgY2xhc3M9XCJnb29nbGVfY29udGFpbmVyXCI+XG4gICAgICA8aW1nIGNsYXNzPVwiYXBvY2FseXB0ZXJuZXRfbG9nb1wiIHNyYz1cInNyYy9pbWFnZXMvbG9nby5wbmdcIiBhbHQ9XCJBcG9jYWx5cHRlcm5ldCBsb2dvXCI+XG4gICAgICA8YSBjbGFzcz1cImdvb2dsZV9idG5cIiBocmVmPVwiaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL28vb2F1dGgyL3YyL2F1dGg/c2NvcGU9ZW1haWwlMjBwcm9maWxlJnN0YXRlPWFwb2NhbHlwdGVybmV0JnJlZGlyZWN0X3VyaT17e3VybH19JnJlc3BvbnNlX3R5cGU9dG9rZW4mY2xpZW50X2lkPTg5MzUwMTI3ODYxNC01aG81NXVscG01Z2w5cGk4cmZ0dG8zMWNlM3RycDlxbi5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbVwiPlxuICAgICAgICBMb2cgaW4gd2l0aCBHb29nbGUgQWNjb3VudFxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgYFxufSlcblxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAvLyB1cmwgPSAnaHR0cDovL2JpbGlja2kuc3Ryb25hemVuLnBsL2Fwbyc7XG4gIC8vIHVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnO1xuICB1cmwgPSAnaHR0cDovL2Fwby5kZXZtZXJpeC5jb20nO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICB9XG5cbn1cbiJdfQ==
