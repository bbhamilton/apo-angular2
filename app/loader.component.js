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
var LoaderComponent = (function () {
    function LoaderComponent(_djangoService, _router, _route) {
        this._djangoService = _djangoService;
        this._router = _router;
        this._route = _route;
    }
    LoaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('access_token')) {
            if (window.location.pathname == '/') {
                this._router.navigate(['/leaderboard']);
            }
            else if (window.location.pathname == '/apo/') {
                this._router.navigate(['/leaderboard'], { skipLocationChange: true });
            }
            else if (window.location.pathname == '/apo/login/' || window.location.pathname == '/login/') {
                this._router.navigate(['/login']);
            }
            else if (window.location.pathname == '/leaderboard/' || window.location.pathname == '/apo/leaderboard/') {
                this._router.navigate(['/leaderboard'], { skipLocationChange: true });
            }
            else if (window.location.pathname == '/challenges/' || window.location.pathname == '/apo/challenges/') {
                this._router.navigate(['/challenges'], { skipLocationChange: true });
            }
            else if (window.location.pathname == '/profile/' || window.location.pathname == '/apo/profile/') {
                this._router.navigate(['/profile'], { skipLocationChange: true });
            }
            else if (window.location.pathname == '/logout/' || window.location.pathname == '/apo/logout/') {
                this._router.navigate(['/logout'], { skipLocationChange: true });
            }
            else {
                this._router.navigate(['/'], { skipLocationChange: true });
            }
        }
        else {
            var params = {};
            var queryString = location.hash.substring(1) || null;
            var regex = /([^&=]+)=([^&]*)/g;
            var m = void 0;
            if (queryString) {
                while (m = regex.exec(queryString)) {
                    params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
                }
                this.google_access_token = params.access_token;
                this._djangoService.authenticate(this.google_access_token)
                    .subscribe(function (data) {
                    _this.access_token = data.access_token;
                    localStorage.setItem('access_token', _this.access_token);
                    _this.refresh_token = data.refresh_token;
                    localStorage.setItem('refresh_token', _this.refresh_token);
                    _this._router.navigate(['/leaderboard']);
                }, function (error) {
                    localStorage.removeItem('access_token');
                    localStorage.removeItem('refresh_token');
                    _this._router.navigate(['/login']);
                }, function () { return console.log('authenticate'); });
            }
            else if (localStorage.getItem('access_token') === null) {
                this._router.navigate(['/login']);
            }
        }
    };
    LoaderComponent = __decorate([
        core_1.Component({
            selector: 'loader',
            template: "<div class=\"loader\">\n      <div class=\"sk-folding-cube\">\n        <div class=\"sk-cube1 sk-cube\"></div>\n        <div class=\"sk-cube2 sk-cube\"></div>\n        <div class=\"sk-cube4 sk-cube\"></div>\n        <div class=\"sk-cube3 sk-cube\"></div>\n      </div>\n    </div>"
        }), 
        __metadata('design:paramtypes', [django_service_1.DjangoService, router_1.Router, router_1.ActivatedRoute])
    ], LoaderComponent);
    return LoaderComponent;
}());
exports.LoaderComponent = LoaderComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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Q0FBQyxDQUFDO29CQUUxRCxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBRTFDLENBQUMsRUFDRCxVQUFBLEtBQUs7b0JBQ0gsWUFBWSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFDeEMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFFekMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxDQUFDLEVBQ0QsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQTNCLENBQTJCLENBQ2xDLENBQUM7WUFFSixDQUFDO1lBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQ3RELENBQUM7Z0JBQ0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLENBQUM7UUFDSCxDQUFDO0lBRUgsQ0FBQztJQWpGSDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQ1IseVJBT087U0FDVixDQUFDOzt1QkFBQTtJQXdFRixzQkFBQztBQUFELENBdEVBLEFBc0VDLElBQUE7QUF0RVksdUJBQWUsa0JBc0UzQixDQUFBIiwiZmlsZSI6ImxvYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9ICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9ICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBEamFuZ29TZXJ2aWNlIH0gICAgICAgICAgIGZyb20gJy4vc2VydmljZXMvZGphbmdvLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xvYWRlcicsXG4gICAgdGVtcGxhdGU6XG4gICAgYDxkaXYgY2xhc3M9XCJsb2FkZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzay1mb2xkaW5nLWN1YmVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNrLWN1YmUxIHNrLWN1YmVcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNrLWN1YmUyIHNrLWN1YmVcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNrLWN1YmU0IHNrLWN1YmVcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNrLWN1YmUzIHNrLWN1YmVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PmBcbn0pXG5cbmV4cG9ydCBjbGFzcyBMb2FkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGRhdGE6IGFueTtcbiAgZ29vZ2xlX2FjY2Vzc190b2tlbjogc3RyaW5nO1xuICBhY2Nlc3NfdG9rZW46IHN0cmluZztcbiAgcmVmcmVzaF90b2tlbjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIF9kamFuZ29TZXJ2aWNlOiBEamFuZ29TZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzX3Rva2VuJykpIHtcbiAgICAgIGlmKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSAnLycpIHtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2xlYWRlcmJvYXJkJ10pO1xuICAgICAgfSBlbHNlIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gJy9hcG8vJykge1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvbGVhZGVyYm9hcmQnXSwgeyBza2lwTG9jYXRpb25DaGFuZ2U6IHRydWUgfSk7XG4gICAgICB9IGVsc2UgaWYoIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSAnL2Fwby9sb2dpbi8nIHx8IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSAnL2xvZ2luLycpIHtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pO1xuICAgICAgfSBlbHNlIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gJy9sZWFkZXJib2FyZC8nIHx8IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSAnL2Fwby9sZWFkZXJib2FyZC8nKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9sZWFkZXJib2FyZCddLCB7IHNraXBMb2NhdGlvbkNoYW5nZTogdHJ1ZSB9KTtcbiAgICAgIH0gZWxzZSBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09ICcvY2hhbGxlbmdlcy8nIHx8IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSAnL2Fwby9jaGFsbGVuZ2VzLycpIHtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2NoYWxsZW5nZXMnXSwgeyBza2lwTG9jYXRpb25DaGFuZ2U6IHRydWUgfSk7XG4gICAgICB9IGVsc2UgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSAnL3Byb2ZpbGUvJyB8fCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gJy9hcG8vcHJvZmlsZS8nKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9wcm9maWxlJ10sIHsgc2tpcExvY2F0aW9uQ2hhbmdlOiB0cnVlIH0pO1xuICAgICAgfSBlbHNlIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gJy9sb2dvdXQvJyB8fCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gJy9hcG8vbG9nb3V0LycpIHtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2xvZ291dCddLCB7IHNraXBMb2NhdGlvbkNoYW5nZTogdHJ1ZSB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy8nXSwgeyBza2lwTG9jYXRpb25DaGFuZ2U6IHRydWUgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBwYXJhbXM6IGFueSA9IHt9O1xuICAgICAgbGV0IHF1ZXJ5U3RyaW5nOiBzdHJpbmcgPSBsb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKSB8fCBudWxsO1xuICAgICAgbGV0IHJlZ2V4OiBhbnkgPSAvKFteJj1dKyk9KFteJl0qKS9nO1xuICAgICAgbGV0IG06IGFueTtcbiAgICAgIGlmKHF1ZXJ5U3RyaW5nKSB7XG4gICAgICAgIHdoaWxlIChtID0gcmVnZXguZXhlYyhxdWVyeVN0cmluZykpIHtcbiAgICAgICAgICBwYXJhbXNbZGVjb2RlVVJJQ29tcG9uZW50KG1bMV0pXSA9IGRlY29kZVVSSUNvbXBvbmVudChtWzJdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ29vZ2xlX2FjY2Vzc190b2tlbiA9IHBhcmFtcy5hY2Nlc3NfdG9rZW47XG5cbiAgICAgICAgdGhpcy5fZGphbmdvU2VydmljZS5hdXRoZW50aWNhdGUodGhpcy5nb29nbGVfYWNjZXNzX3Rva2VuKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgdGhpcy5hY2Nlc3NfdG9rZW4gPSBkYXRhLmFjY2Vzc190b2tlbjtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY2Nlc3NfdG9rZW4nLCB0aGlzLmFjY2Vzc190b2tlbik7XG5cbiAgICAgICAgICAgIHRoaXMucmVmcmVzaF90b2tlbiA9IGRhdGEucmVmcmVzaF90b2tlbjtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyZWZyZXNoX3Rva2VuJywgdGhpcy5yZWZyZXNoX3Rva2VuKTtcblxuICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2xlYWRlcmJvYXJkJ10pO1xuXG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYWNjZXNzX3Rva2VuJyk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncmVmcmVzaF90b2tlbicpO1xuXG4gICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygnYXV0aGVudGljYXRlJyksXG4gICAgICAgICk7XG5cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc190b2tlbicpID09PSBudWxsKVxuICAgICAge1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxufVxuIl19
