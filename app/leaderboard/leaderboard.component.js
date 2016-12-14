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
var django_service_1 = require('../services/django.service');
var LeaderboardComponent = (function () {
    function LeaderboardComponent(router, _djangoService) {
        this.router = router;
        this._djangoService = _djangoService;
        this.showAllButton = true;
        this.leaderboardHeader = 'Top 10 Rebels';
    }
    LeaderboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._djangoService.getLeaderboard(10, localStorage.getItem('access_token'))
            .subscribe(function (data) {
            _this.leaderboardData = data;
            console.dir(data);
        }, function (error) { return console.error(error); }, function () { return console.log('getLeaderboard'); });
    };
    LeaderboardComponent.prototype.showAll = function () {
        var _this = this;
        this.leaderboardHeader = 'Leaderboard';
        this.showAllButton = false;
        this._djangoService.getLeaderboard(100, localStorage.getItem('access_token'))
            .subscribe(function (data) {
            _this.leaderboardData = data;
            console.dir(data);
        }, function (error) { return console.error(error); }, function () { return console.log('getLeaderboard'); });
    };
    LeaderboardComponent = __decorate([
        core_1.Component({
            selector: 'leaderboard',
            templateUrl: 'app/leaderboard/leaderboard.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router, django_service_1.DjangoService])
    ], LeaderboardComponent);
    return LeaderboardComponent;
}());
exports.LeaderboardComponent = LeaderboardComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYWRlcmJvYXJkL2xlYWRlcmJvYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQW1DLGVBQWUsQ0FBQyxDQUFBO0FBQ25ELHVCQUFtQyxpQkFBaUIsQ0FBQyxDQUFBO0FBRXJELCtCQUFtQyw0QkFBNEIsQ0FBQyxDQUFBO0FBT2hFO0lBS0UsOEJBQW9CLE1BQWMsRUFBVSxjQUE2QjtRQUFyRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFIekUsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsc0JBQWlCLEdBQUcsZUFBZSxDQUFDO0lBRXlDLENBQUM7SUFFOUUsdUNBQVEsR0FBUjtRQUFBLGlCQVlDO1FBVkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDM0UsU0FBUyxDQUNSLFVBQUEsSUFBSTtZQUNGLEtBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBcEIsQ0FBb0IsRUFDN0IsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsRUFBN0IsQ0FBNkIsQ0FDcEMsQ0FBQztJQUVKLENBQUM7SUFFRCxzQ0FBTyxHQUFQO1FBQUEsaUJBWUM7UUFYQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsYUFBYSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQzVFLFNBQVMsQ0FDUixVQUFBLElBQUk7WUFDRixLQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQXBCLENBQW9CLEVBQzdCLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLEVBQTdCLENBQTZCLENBQ3BDLENBQUM7SUFDSixDQUFDO0lBdENIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSw0Q0FBNEM7U0FDMUQsQ0FBQzs7NEJBQUE7SUFxQ0YsMkJBQUM7QUFBRCxDQW5DQSxBQW1DQyxJQUFBO0FBbkNZLDRCQUFvQix1QkFtQ2hDLENBQUEiLCJmaWxlIjoibGVhZGVyYm9hcmQvbGVhZGVyYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9ICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IERqYW5nb1NlcnZpY2UgfSAgICAgIGZyb20gJy4uL3NlcnZpY2VzL2RqYW5nby5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGVhZGVyYm9hcmQnLFxuICB0ZW1wbGF0ZVVybDogJ2FwcC9sZWFkZXJib2FyZC9sZWFkZXJib2FyZC5jb21wb25lbnQuaHRtbCcsXG59KVxuXG5leHBvcnQgY2xhc3MgTGVhZGVyYm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBsZWFkZXJib2FyZERhdGE7XG4gIHNob3dBbGxCdXR0b24gPSB0cnVlO1xuICBsZWFkZXJib2FyZEhlYWRlciA9ICdUb3AgMTAgUmViZWxzJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIF9kamFuZ29TZXJ2aWNlOiBEamFuZ29TZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgIHRoaXMuX2RqYW5nb1NlcnZpY2UuZ2V0TGVhZGVyYm9hcmQoMTAsIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NfdG9rZW4nKSlcbiAgICAuc3Vic2NyaWJlKFxuICAgICAgZGF0YSA9PiB7XG4gICAgICAgIHRoaXMubGVhZGVyYm9hcmREYXRhID0gZGF0YTtcbiAgICAgICAgY29uc29sZS5kaXIoZGF0YSk7XG4gICAgICB9LFxuICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICAoKSA9PiBjb25zb2xlLmxvZygnZ2V0TGVhZGVyYm9hcmQnKSxcbiAgICApO1xuXG4gIH1cblxuICBzaG93QWxsKCk6IHZvaWQge1xuICAgIHRoaXMubGVhZGVyYm9hcmRIZWFkZXIgPSAnTGVhZGVyYm9hcmQnO1xuICAgIHRoaXMuc2hvd0FsbEJ1dHRvbiA9IGZhbHNlO1xuICAgIHRoaXMuX2RqYW5nb1NlcnZpY2UuZ2V0TGVhZGVyYm9hcmQoMTAwLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzX3Rva2VuJykpXG4gICAgLnN1YnNjcmliZShcbiAgICAgIGRhdGEgPT4ge1xuICAgICAgICB0aGlzLmxlYWRlcmJvYXJkRGF0YSA9IGRhdGE7XG4gICAgICAgIGNvbnNvbGUuZGlyKGRhdGEpO1xuICAgICAgfSxcbiAgICAgIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgICAgKCkgPT4gY29uc29sZS5sb2coJ2dldExlYWRlcmJvYXJkJyksXG4gICAgKTtcbiAgfVxuXG59XG4iXX0=
