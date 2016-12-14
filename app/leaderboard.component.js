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
var LeaderboardComponent = (function () {
    function LeaderboardComponent(_djangoService, router) {
        this._djangoService = _djangoService;
        this.router = router;
    }
    LeaderboardComponent.prototype.ngOnInit = function () {
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
    LeaderboardComponent = __decorate([
        core_1.Component({
            selector: 'leaderboard',
            template: "<level></level>\n    <leaderboard></leaderboard>\n    <footer-component></footer-component>\n    "
        }), 
        __metadata('design:paramtypes', [django_service_1.DjangoService, router_1.Router])
    ], LeaderboardComponent);
    return LeaderboardComponent;
}());
exports.LeaderboardComponent = LeaderboardComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYWRlcmJvYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHVCQUFrQyxpQkFBaUIsQ0FBQyxDQUFBO0FBRXBELCtCQUFrQywyQkFBMkIsQ0FBQyxDQUFBO0FBVzlEO0lBT0UsOEJBQXFCLGNBQTZCLEVBQVUsTUFBYztRQUFyRCxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7SUFBSSxDQUFDO0lBRS9FLHVDQUFRLEdBQVI7UUFFRSxJQUFJLE1BQU0sR0FBUSxFQUFFLENBQUM7UUFDckIsSUFBSSxXQUFXLEdBQVcsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDO1FBQzdELElBQUksS0FBSyxHQUFRLG1CQUFtQixDQUFDO1FBQ3JDLElBQUksQ0FBTSxDQUFDO1FBQ1gsb0JBQW9CO1FBQ3BCLEVBQUU7UUFDRiwwQ0FBMEM7UUFDMUMsbUVBQW1FO1FBQ25FLE1BQU07UUFDTixFQUFFO1FBQ0Ysb0RBQW9EO1FBQ3BELEVBQUU7UUFDRiwrREFBK0Q7UUFDL0QsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQiwrQ0FBK0M7UUFDL0MsaUVBQWlFO1FBQ2pFLEVBQUU7UUFDRixpREFBaUQ7UUFDakQsbUVBQW1FO1FBQ25FLEVBQUU7UUFDRixnREFBZ0Q7UUFDaEQsU0FBUztRQUNULHFDQUFxQztRQUNyQyx5Q0FBeUM7UUFDekMsT0FBTztRQUNQLEVBQUU7UUFDRixJQUFJO1FBQ0oseURBQXlEO1FBQ3pELElBQUk7UUFDSixzQ0FBc0M7UUFDdEMsSUFBSTtRQUNKLGdEQUFnRDtRQUNoRCxJQUFJO1FBQ0osdUVBQXVFO1FBQ3ZFLElBQUk7SUFFTixDQUFDO0lBekRIO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFDUixtR0FHQztTQUNKLENBQUM7OzRCQUFBO0lBb0RGLDJCQUFDO0FBQUQsQ0FsREEsQUFrREMsSUFBQTtBQWxEWSw0QkFBb0IsdUJBa0RoQyxDQUFBIiwiZmlsZSI6ImxlYWRlcmJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IERqYW5nb1NlcnZpY2UgfSAgICAgZnJvbSAnLi9zZXJ2aWNlcy9kamFuZ28uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbGVhZGVyYm9hcmQnLFxuICAgIHRlbXBsYXRlOlxuICAgIGA8bGV2ZWw+PC9sZXZlbD5cbiAgICA8bGVhZGVyYm9hcmQ+PC9sZWFkZXJib2FyZD5cbiAgICA8Zm9vdGVyLWNvbXBvbmVudD48L2Zvb3Rlci1jb21wb25lbnQ+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIExlYWRlcmJvYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBkYXRhOiBhbnk7XG4gIGdvb2dsZV9hY2Nlc3NfdG9rZW46IHN0cmluZztcbiAgYWNjZXNzX3Rva2VuOiBzdHJpbmc7XG4gIHJlZnJlc2hfdG9rZW46IHN0cmluZztcblxuICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBfZGphbmdvU2VydmljZTogRGphbmdvU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICBsZXQgcGFyYW1zOiBhbnkgPSB7fTtcbiAgICBsZXQgcXVlcnlTdHJpbmc6IHN0cmluZyA9IGxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpIHx8IG51bGw7XG4gICAgbGV0IHJlZ2V4OiBhbnkgPSAvKFteJj1dKyk9KFteJl0qKS9nO1xuICAgIGxldCBtOiBhbnk7XG4gICAgLy8gaWYocXVlcnlTdHJpbmcpIHtcbiAgICAvL1xuICAgIC8vICAgd2hpbGUgKG0gPSByZWdleC5leGVjKHF1ZXJ5U3RyaW5nKSkge1xuICAgIC8vICAgICBwYXJhbXNbZGVjb2RlVVJJQ29tcG9uZW50KG1bMV0pXSA9IGRlY29kZVVSSUNvbXBvbmVudChtWzJdKTtcbiAgICAvLyAgIH1cbiAgICAvL1xuICAgIC8vICAgdGhpcy5nb29nbGVfYWNjZXNzX3Rva2VuID0gcGFyYW1zLmFjY2Vzc190b2tlbjtcbiAgICAvL1xuICAgIC8vICAgdGhpcy5fZGphbmdvU2VydmljZS5hdXRoZW50aWNhdGUodGhpcy5nb29nbGVfYWNjZXNzX3Rva2VuKVxuICAgIC8vICAgLnN1YnNjcmliZShcbiAgICAvLyAgICAgZGF0YSA9PiB7XG4gICAgLy8gICAgICAgdGhpcy5hY2Nlc3NfdG9rZW4gPSBkYXRhLmFjY2Vzc190b2tlbjtcbiAgICAvLyAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWNjZXNzX3Rva2VuJywgdGhpcy5hY2Nlc3NfdG9rZW4pO1xuICAgIC8vXG4gICAgLy8gICAgICAgdGhpcy5yZWZyZXNoX3Rva2VuID0gZGF0YS5yZWZyZXNoX3Rva2VuO1xuICAgIC8vICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyZWZyZXNoX3Rva2VuJywgdGhpcy5yZWZyZXNoX3Rva2VuKTtcbiAgICAvL1xuICAgIC8vICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xlYWRlcmJvYXJkJ10pO1xuICAgIC8vICAgICB9LFxuICAgIC8vICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAvLyAgICAgKCkgPT4gY29uc29sZS5sb2coJ2F1dGhlbnRpY2F0ZScpLFxuICAgIC8vICAgKTtcbiAgICAvL1xuICAgIC8vIH1cbiAgICAvLyBlbHNlIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NfdG9rZW4nKSA9PT0gbnVsbClcbiAgICAvLyB7XG4gICAgLy8gICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcbiAgICAvLyB9XG4gICAgLy8gZWxzZSBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzX3Rva2VuJykpXG4gICAgLy8ge1xuICAgIC8vICAgY29uc29sZS5sb2coJ2xvZ2dlZCBpbjogJyArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NfdG9rZW4nKSk7XG4gICAgLy8gfVxuXG4gIH1cblxufVxuIl19
