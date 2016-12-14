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
var LogoutComponent = (function () {
    function LogoutComponent(router) {
        this.router = router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('player_id');
        localStorage.removeItem('player_exp');
        localStorage.removeItem('player_mrx');
        localStorage.removeItem('player_avatar');
        localStorage.removeItem('player_is_staff');
        localStorage.removeItem('player_level');
        localStorage.removeItem('player_username');
    };
    LogoutComponent = __decorate([
        core_1.Component({
            selector: 'logout',
            template: "<div class=\"google_loginpage\">\n    <div class=\"google_container\">\n      <img class=\"apocalypternet_logo\" src=\"src/images/logo.png\" alt=\"Apocalypternet logo\">\n      <p>User has been logged out.</p> <br>\n      <p><a class=\"logout-link\" routerLink=\"/login\" >Log in</a> again.</p>\n    </div>\n  </div>"
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], LogoutComponent);
    return LogoutComponent;
}());
exports.LogoutComponent = LogoutComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ291dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFtQyxlQUFlLENBQUMsQ0FBQTtBQUNuRCx1QkFBbUMsaUJBQWlCLENBQUMsQ0FBQTtBQWNyRDtJQUVFLHlCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFJLENBQUM7SUFFdkMsa0NBQVEsR0FBUjtRQUNFLFlBQVksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDeEMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN6QyxZQUFZLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JDLFlBQVksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdEMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN0QyxZQUFZLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3pDLFlBQVksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMzQyxZQUFZLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3hDLFlBQVksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBMUJIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFDUiw4VEFNTztTQUNSLENBQUM7O3VCQUFBO0lBa0JGLHNCQUFDO0FBQUQsQ0FoQkEsQUFnQkMsSUFBQTtBQWhCWSx1QkFBZSxrQkFnQjNCLENBQUEiLCJmaWxlIjoibG9nb3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsb2dvdXQnLFxuICB0ZW1wbGF0ZTpcbiAgYDxkaXYgY2xhc3M9XCJnb29nbGVfbG9naW5wYWdlXCI+XG4gICAgPGRpdiBjbGFzcz1cImdvb2dsZV9jb250YWluZXJcIj5cbiAgICAgIDxpbWcgY2xhc3M9XCJhcG9jYWx5cHRlcm5ldF9sb2dvXCIgc3JjPVwic3JjL2ltYWdlcy9sb2dvLnBuZ1wiIGFsdD1cIkFwb2NhbHlwdGVybmV0IGxvZ29cIj5cbiAgICAgIDxwPlVzZXIgaGFzIGJlZW4gbG9nZ2VkIG91dC48L3A+IDxicj5cbiAgICAgIDxwPjxhIGNsYXNzPVwibG9nb3V0LWxpbmtcIiByb3V0ZXJMaW5rPVwiL2xvZ2luXCIgPkxvZyBpbjwvYT4gYWdhaW4uPC9wPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5gXG59KVxuXG5leHBvcnQgY2xhc3MgTG9nb3V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYWNjZXNzX3Rva2VuJyk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3JlZnJlc2hfdG9rZW4nKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncGxheWVyX2lkJyk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3BsYXllcl9leHAnKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncGxheWVyX21yeCcpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwbGF5ZXJfYXZhdGFyJyk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3BsYXllcl9pc19zdGFmZicpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwbGF5ZXJfbGV2ZWwnKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncGxheWVyX3VzZXJuYW1lJyk7XG4gIH1cblxufVxuIl19
