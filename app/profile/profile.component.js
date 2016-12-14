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
var ProfileComponent = (function () {
    function ProfileComponent(router, route, _djangoService) {
        this.router = router;
        this.route = route;
        this._djangoService = _djangoService;
        this.first_name = null;
        this.title_show = false;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        if (this.id) {
            this._djangoService.getProfile(localStorage.getItem('access_token'), this.id).subscribe(function (data) {
                _this.player_exp = data.exp;
                _this.first_name = data.first_name;
                _this.last_name = data.last_name;
                _this.player_mrx = data.mrx;
                _this.player_name = data.username;
                _this.avatar = data.avatar;
                _this.is_staff = data.is_staff;
                _this.level = data.level;
                _this.badges = data.badges;
            }, function (error) { return console.error(error); }, function () { return console.log('getProfile'); });
            this._djangoService.getPlayerHistory(localStorage.getItem('access_token'), this.id).subscribe(function (data) { _this.history = data; console.dir(data); }, function (error) { return console.error(error); }, function () { return console.log('getPlayerHistory'); });
        }
        else {
            this._djangoService.getMe(localStorage.getItem('access_token'))
                .subscribe(function (data) {
                _this.player_exp = data.exp;
                _this.first_name = data.first_name;
                _this.last_name = data.last_name;
                _this.player_mrx = data.mrx;
                _this.player_name = data.username;
                _this.avatar = data.avatar;
                _this.is_staff = data.is_staff;
                _this.level = data.level;
                _this.badges = data.badges;
                console.dir(_this.badges);
            }, function (error) { return console.error(error); }, function () { return console.log('getMe'); });
            ;
            this._djangoService.getPlayerHistory(localStorage.getItem('access_token'), localStorage.getItem('player_id')).subscribe(function (data) { _this.history = data; }, function (error) { return console.error(error); }, function () { return console.log('getPlayerHistory'); });
        }
    };
    ProfileComponent.prototype.showTitle = function (name, event) {
        this.title_x = event.clientX + 10;
        this.title_y = event.clientY - 90;
        this.title_show = true;
        this.title_name = name;
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'profile',
            templateUrl: 'app/profile/profile.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, django_service_1.DjangoService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQyxlQUFlLENBQUMsQ0FBQTtBQUMxRCx1QkFBMEMsaUJBQWlCLENBQUMsQ0FBQTtBQUU1RCwrQkFBMEMsNEJBQTRCLENBQUMsQ0FBQTtBQVF2RTtJQW9CRSwwQkFDVSxNQUFjLEVBQ2QsS0FBcUIsRUFDckIsY0FBNkI7UUFGN0IsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBcEJ2QyxlQUFVLEdBQUcsSUFBSSxDQUFDO1FBY2xCLGVBQVUsR0FBRyxLQUFLLENBQUM7SUFPZixDQUFDO0lBRUwsbUNBQVEsR0FBUjtRQUFBLGlCQWdFQztRQTlEQyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUzQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNYLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUM1QixZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUNwQyxJQUFJLENBQUMsRUFBRSxDQUNSLENBQUMsU0FBUyxDQUNULFVBQUEsSUFBSTtnQkFDRixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQzNCLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztnQkFDbEMsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUNoQyxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQzNCLEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDakMsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUMxQixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQzlCLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDeEIsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBRTVCLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQXBCLENBQW9CLEVBQzdCLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUF6QixDQUF5QixDQUNoQyxDQUFDO1lBRUYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FDbEMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFDcEMsSUFBSSxDQUFDLEVBQUUsQ0FDUixDQUFDLFNBQVMsQ0FDVCxVQUFBLElBQUksSUFBTSxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ25ELFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBcEIsQ0FBb0IsRUFDN0IsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsRUFBL0IsQ0FBK0IsQ0FDdEMsQ0FBQztRQUNKLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7aUJBQzlELFNBQVMsQ0FDUixVQUFBLElBQUk7Z0JBQ0YsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUMzQixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7Z0JBQ2xDLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDaEMsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUMzQixLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ2pDLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDMUIsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUM5QixLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ3hCLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFFMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDM0IsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBcEIsQ0FBb0IsRUFDN0IsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQXBCLENBQW9CLENBQUEsQ0FBQztZQUM1QixDQUFDO1lBRUYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FDbEMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFDcEMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FDbEMsQ0FBQyxTQUFTLENBQ1QsVUFBQSxJQUFJLElBQU0sS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ2hDLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBcEIsQ0FBb0IsRUFDN0IsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsRUFBL0IsQ0FBK0IsQ0FDdEMsQ0FBQztRQUVKLENBQUM7SUFFSCxDQUFDO0lBRUQsb0NBQVMsR0FBVCxVQUFVLElBQUksRUFBRSxLQUFpQjtRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQXRHSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsb0NBQW9DO1NBQ2xELENBQUM7O3dCQUFBO0lBcUdGLHVCQUFDO0FBQUQsQ0FuR0EsQUFtR0MsSUFBQTtBQW5HWSx3QkFBZ0IsbUJBbUc1QixDQUFBIiwiZmlsZSI6InByb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9ICAgICAgICAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSAgICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBEamFuZ29TZXJ2aWNlIH0gICAgICAgICAgICAgZnJvbSAnLi4vc2VydmljZXMvZGphbmdvLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Byb2ZpbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50Lmh0bWwnLFxufSlcblxuZXhwb3J0IGNsYXNzIFByb2ZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHBsYXllcl9pZDtcbiAgZmlyc3RfbmFtZSA9IG51bGw7XG4gIGxhc3RfbmFtZTtcbiAgaWQ7XG4gIHBsYXllcl9leHA7XG4gIHBsYXllcl9tcng7XG4gIHBsYXllcl9uYW1lO1xuICBhdmF0YXI7XG4gIGlzX3N0YWZmO1xuICBsZXZlbDtcbiAgcGxheWVyX2VtYWlsO1xuICBiYWRnZXM7XG4gIGhpc3Rvcnk7XG4gIHRpdGxlX3g7XG4gIHRpdGxlX3k7XG4gIHRpdGxlX3Nob3cgPSBmYWxzZTtcblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBfZGphbmdvU2VydmljZTogRGphbmdvU2VydmljZVxuICApIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgdGhpcy5pZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zWydpZCddO1xuXG4gICAgaWYodGhpcy5pZCkge1xuICAgICAgdGhpcy5fZGphbmdvU2VydmljZS5nZXRQcm9maWxlKFxuICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzX3Rva2VuJyksXG4gICAgICAgIHRoaXMuaWRcbiAgICAgICkuc3Vic2NyaWJlKFxuICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICB0aGlzLnBsYXllcl9leHAgPSBkYXRhLmV4cDtcbiAgICAgICAgICB0aGlzLmZpcnN0X25hbWUgPSBkYXRhLmZpcnN0X25hbWU7XG4gICAgICAgICAgdGhpcy5sYXN0X25hbWUgPSBkYXRhLmxhc3RfbmFtZTtcbiAgICAgICAgICB0aGlzLnBsYXllcl9tcnggPSBkYXRhLm1yeDtcbiAgICAgICAgICB0aGlzLnBsYXllcl9uYW1lID0gZGF0YS51c2VybmFtZTtcbiAgICAgICAgICB0aGlzLmF2YXRhciA9IGRhdGEuYXZhdGFyO1xuICAgICAgICAgIHRoaXMuaXNfc3RhZmYgPSBkYXRhLmlzX3N0YWZmO1xuICAgICAgICAgIHRoaXMubGV2ZWwgPSBkYXRhLmxldmVsO1xuICAgICAgICAgIHRoaXMuYmFkZ2VzID0gZGF0YS5iYWRnZXM7XG5cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICAgICgpID0+IGNvbnNvbGUubG9nKCdnZXRQcm9maWxlJylcbiAgICAgICk7XG5cbiAgICAgIHRoaXMuX2RqYW5nb1NlcnZpY2UuZ2V0UGxheWVySGlzdG9yeShcbiAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc190b2tlbicpLFxuICAgICAgICB0aGlzLmlkXG4gICAgICApLnN1YnNjcmliZShcbiAgICAgICAgZGF0YSA9PiB7IHRoaXMuaGlzdG9yeSA9IGRhdGE7IGNvbnNvbGUuZGlyKGRhdGEpOyB9LFxuICAgICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgICAgKCkgPT4gY29uc29sZS5sb2coJ2dldFBsYXllckhpc3RvcnknKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZGphbmdvU2VydmljZS5nZXRNZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzX3Rva2VuJykpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICB0aGlzLnBsYXllcl9leHAgPSBkYXRhLmV4cDtcbiAgICAgICAgICB0aGlzLmZpcnN0X25hbWUgPSBkYXRhLmZpcnN0X25hbWU7XG4gICAgICAgICAgdGhpcy5sYXN0X25hbWUgPSBkYXRhLmxhc3RfbmFtZTtcbiAgICAgICAgICB0aGlzLnBsYXllcl9tcnggPSBkYXRhLm1yeDtcbiAgICAgICAgICB0aGlzLnBsYXllcl9uYW1lID0gZGF0YS51c2VybmFtZTtcbiAgICAgICAgICB0aGlzLmF2YXRhciA9IGRhdGEuYXZhdGFyO1xuICAgICAgICAgIHRoaXMuaXNfc3RhZmYgPSBkYXRhLmlzX3N0YWZmO1xuICAgICAgICAgIHRoaXMubGV2ZWwgPSBkYXRhLmxldmVsO1xuICAgICAgICAgIHRoaXMuYmFkZ2VzID0gZGF0YS5iYWRnZXM7XG5cbiAgICAgICAgICBjb25zb2xlLmRpcih0aGlzLmJhZGdlcyk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygnZ2V0TWUnKTtcbiAgICAgICk7XG5cbiAgICAgIHRoaXMuX2RqYW5nb1NlcnZpY2UuZ2V0UGxheWVySGlzdG9yeShcbiAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc190b2tlbicpLFxuICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGxheWVyX2lkJylcbiAgICAgICkuc3Vic2NyaWJlKFxuICAgICAgICBkYXRhID0+IHsgdGhpcy5oaXN0b3J5ID0gZGF0YTsgfSxcbiAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICAgICgpID0+IGNvbnNvbGUubG9nKCdnZXRQbGF5ZXJIaXN0b3J5JylcbiAgICAgICk7XG5cbiAgICB9XG5cbiAgfVxuXG4gIHNob3dUaXRsZShuYW1lLCBldmVudDogTW91c2VFdmVudCk6dm9pZCB7XG4gICAgdGhpcy50aXRsZV94ID0gZXZlbnQuY2xpZW50WCArIDEwO1xuICAgIHRoaXMudGl0bGVfeSA9IGV2ZW50LmNsaWVudFkgLSA5MDtcbiAgICB0aGlzLnRpdGxlX3Nob3cgPSB0cnVlO1xuICAgIHRoaXMudGl0bGVfbmFtZSA9IG5hbWU7XG4gIH1cblxufVxuIl19
