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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var django_service_1 = require('./services/django.service');
var MainComponent = (function () {
    function MainComponent(_djangoService, router) {
        this._djangoService = _djangoService;
        this.router = router;
    }
    MainComponent.prototype.ngOnInit = function () {
        var params = {};
        var queryString = location.hash.substring(1) || null;
        var regex = /([^&=]+)=([^&]*)/g;
        var m;
        // if(queryString) {
        //
        //   while (m = regex.exec(queryString)) {
        //     params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
        //   }
        //
        //   this.google_access_token = params.access_token;
        //
        //   this._djangoService.authenticate(this.google_access_token)
        //   .subscribe(
        //     data => {
        //       this.access_token = data.access_token;
        //       localStorage.setItem('access_token', this.access_token);
        //
        //       this.refresh_token = data.refresh_token;
        //       localStorage.setItem('refresh_token', this.refresh_token);
        //
        //       this.router.navigate(['/leaderboard']);
        //     },
        //     error => console.error(error),
        //     () => console.log('authenticate'),
        //   );
        //
        // }
        // else if(localStorage.getItem('access_token') === null)
        // {
        //   this.router.navigate(['/login']);
        // }
        // else if(localStorage.getItem('access_token'))
        // {
        //   console.log('logged in: ' + localStorage.getItem('access_token'));
        // }
    };
    MainComponent = __decorate([
        core_1.Component({
            selector: 'main',
            template: "<header-component></header-component>\n    <level></level>\n    <leaderboard></leaderboard>\n    <footer-component></footer-component>\n    "
        }), 
        __metadata('design:paramtypes', [django_service_1.DjangoService, router_1.Router])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsdUJBQWtDLGlCQUFpQixDQUFDLENBQUE7QUFFcEQsK0JBQWtDLDJCQUEyQixDQUFDLENBQUE7QUFZOUQ7SUFPRSx1QkFBcUIsY0FBNkIsRUFBVSxNQUFjO1FBQXJELG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFJLENBQUM7SUFFL0UsZ0NBQVEsR0FBUjtRQUVFLElBQUksTUFBTSxHQUFRLEVBQUUsQ0FBQztRQUNyQixJQUFJLFdBQVcsR0FBVyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUM7UUFDN0QsSUFBSSxLQUFLLEdBQVEsbUJBQW1CLENBQUM7UUFDckMsSUFBSSxDQUFNLENBQUM7UUFDWCxvQkFBb0I7UUFDcEIsRUFBRTtRQUNGLDBDQUEwQztRQUMxQyxtRUFBbUU7UUFDbkUsTUFBTTtRQUNOLEVBQUU7UUFDRixvREFBb0Q7UUFDcEQsRUFBRTtRQUNGLCtEQUErRDtRQUMvRCxnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLCtDQUErQztRQUMvQyxpRUFBaUU7UUFDakUsRUFBRTtRQUNGLGlEQUFpRDtRQUNqRCxtRUFBbUU7UUFDbkUsRUFBRTtRQUNGLGdEQUFnRDtRQUNoRCxTQUFTO1FBQ1QscUNBQXFDO1FBQ3JDLHlDQUF5QztRQUN6QyxPQUFPO1FBQ1AsRUFBRTtRQUNGLElBQUk7UUFDSix5REFBeUQ7UUFDekQsSUFBSTtRQUNKLHNDQUFzQztRQUN0QyxJQUFJO1FBQ0osZ0RBQWdEO1FBQ2hELElBQUk7UUFDSix1RUFBdUU7UUFDdkUsSUFBSTtJQUVOLENBQUM7SUExREg7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUNSLDhJQUlDO1NBQ0osQ0FBQzs7cUJBQUE7SUFvREYsb0JBQUM7QUFBRCxDQWxEQSxBQWtEQyxJQUFBO0FBbERZLHFCQUFhLGdCQWtEekIsQ0FBQSIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IERqYW5nb1NlcnZpY2UgfSAgICAgZnJvbSAnLi9zZXJ2aWNlcy9kamFuZ28uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbWFpbicsXG4gICAgdGVtcGxhdGU6XG4gICAgYDxoZWFkZXItY29tcG9uZW50PjwvaGVhZGVyLWNvbXBvbmVudD5cbiAgICA8bGV2ZWw+PC9sZXZlbD5cbiAgICA8bGVhZGVyYm9hcmQ+PC9sZWFkZXJib2FyZD5cbiAgICA8Zm9vdGVyLWNvbXBvbmVudD48L2Zvb3Rlci1jb21wb25lbnQ+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIE1haW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGRhdGE6IGFueTtcbiAgZ29vZ2xlX2FjY2Vzc190b2tlbjogc3RyaW5nO1xuICBhY2Nlc3NfdG9rZW46IHN0cmluZztcbiAgcmVmcmVzaF90b2tlbjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIF9kamFuZ29TZXJ2aWNlOiBEamFuZ29TZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgIGxldCBwYXJhbXM6IGFueSA9IHt9O1xuICAgIGxldCBxdWVyeVN0cmluZzogc3RyaW5nID0gbG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSkgfHwgbnVsbDtcbiAgICBsZXQgcmVnZXg6IGFueSA9IC8oW14mPV0rKT0oW14mXSopL2c7XG4gICAgbGV0IG06IGFueTtcbiAgICAvLyBpZihxdWVyeVN0cmluZykge1xuICAgIC8vXG4gICAgLy8gICB3aGlsZSAobSA9IHJlZ2V4LmV4ZWMocXVlcnlTdHJpbmcpKSB7XG4gICAgLy8gICAgIHBhcmFtc1tkZWNvZGVVUklDb21wb25lbnQobVsxXSldID0gZGVjb2RlVVJJQ29tcG9uZW50KG1bMl0pO1xuICAgIC8vICAgfVxuICAgIC8vXG4gICAgLy8gICB0aGlzLmdvb2dsZV9hY2Nlc3NfdG9rZW4gPSBwYXJhbXMuYWNjZXNzX3Rva2VuO1xuICAgIC8vXG4gICAgLy8gICB0aGlzLl9kamFuZ29TZXJ2aWNlLmF1dGhlbnRpY2F0ZSh0aGlzLmdvb2dsZV9hY2Nlc3NfdG9rZW4pXG4gICAgLy8gICAuc3Vic2NyaWJlKFxuICAgIC8vICAgICBkYXRhID0+IHtcbiAgICAvLyAgICAgICB0aGlzLmFjY2Vzc190b2tlbiA9IGRhdGEuYWNjZXNzX3Rva2VuO1xuICAgIC8vICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY2Nlc3NfdG9rZW4nLCB0aGlzLmFjY2Vzc190b2tlbik7XG4gICAgLy9cbiAgICAvLyAgICAgICB0aGlzLnJlZnJlc2hfdG9rZW4gPSBkYXRhLnJlZnJlc2hfdG9rZW47XG4gICAgLy8gICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3JlZnJlc2hfdG9rZW4nLCB0aGlzLnJlZnJlc2hfdG9rZW4pO1xuICAgIC8vXG4gICAgLy8gICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbGVhZGVyYm9hcmQnXSk7XG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgIC8vICAgICAoKSA9PiBjb25zb2xlLmxvZygnYXV0aGVudGljYXRlJyksXG4gICAgLy8gICApO1xuICAgIC8vXG4gICAgLy8gfVxuICAgIC8vIGVsc2UgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc190b2tlbicpID09PSBudWxsKVxuICAgIC8vIHtcbiAgICAvLyAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pO1xuICAgIC8vIH1cbiAgICAvLyBlbHNlIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NfdG9rZW4nKSlcbiAgICAvLyB7XG4gICAgLy8gICBjb25zb2xlLmxvZygnbG9nZ2VkIGluOiAnICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc190b2tlbicpKTtcbiAgICAvLyB9XG5cbiAgfVxuXG59XG4iXX0=
