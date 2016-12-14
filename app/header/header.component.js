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
var django_service_1 = require('../services/django.service');
var HeaderComponent = (function () {
    function HeaderComponent(_djangoService, _router) {
        this._djangoService = _djangoService;
        this._router = _router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('player_id')) {
            this.player_mrx = localStorage.getItem('player_mrx');
            this.player_exp = localStorage.getItem('player_exp');
            this.player_name = localStorage.getItem('player_username');
            this.player_id = localStorage.getItem('player_id');
            this.avatar = localStorage.getItem('player_avatar');
            this.is_staff = localStorage.getItem('player_is_staff');
            this.level = localStorage.getItem('player_level');
            this._djangoService.getMe(localStorage.getItem('access_token'))
                .subscribe(function (data) {
                _this.player_exp = data.exp;
                _this.player_mrx = data.mrx;
                _this.player_name = data.username;
                _this.avatar = data.avatar;
                _this.player_id = data.id;
                _this.is_staff = data.is_staff;
                _this.level = data.level;
                localStorage.setItem('player_id', data.id);
                localStorage.setItem('player_exp', data.exp);
                localStorage.setItem('player_mrx', data.mrx);
                localStorage.setItem('player_avatar', data.avatar);
                localStorage.setItem('player_is_staff', data.is_staff);
                localStorage.setItem('player_level', data.level);
                localStorage.setItem('player_username', data.username);
            }, function (error) { return console.error(error); }, function () { return console.log('getMe'); });
            ;
        }
        else {
            this._djangoService.getMe(localStorage.getItem('access_token'))
                .subscribe(function (data) {
                _this.player_exp = data.exp;
                _this.player_mrx = data.mrx;
                _this.player_name = data.username;
                _this.avatar = data.avatar;
                _this.player_id = data.id;
                _this.is_staff = data.is_staff;
                _this.level = data.level;
                localStorage.setItem('player_id', data.id);
                localStorage.setItem('player_exp', data.exp);
                localStorage.setItem('player_mrx', data.mrx);
                localStorage.setItem('player_avatar', data.avatar);
                localStorage.setItem('player_is_staff', data.is_staff);
                localStorage.setItem('player_level', data.level);
                localStorage.setItem('player_username', data.username);
            }, function (error) { return console.error(error); }, function () { return console.log('getMe'); });
            ;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], HeaderComponent.prototype, "player_mrx", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], HeaderComponent.prototype, "player_exp", void 0);
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'header-component',
            templateUrl: 'app/header/header.component.html'
        }), 
        __metadata('design:paramtypes', [django_service_1.DjangoService, router_1.Router])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFDM0QsdUJBQTJDLGlCQUFpQixDQUFDLENBQUE7QUFFN0QsK0JBQTJDLDRCQUE0QixDQUFDLENBQUE7QUFPeEU7SUFVRSx5QkFBb0IsY0FBNkIsRUFBVSxPQUFlO1FBQXRELG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtJQUFHLENBQUM7SUFFOUUsa0NBQVEsR0FBUjtRQUFBLGlCQWlFQztRQS9EQyxFQUFFLENBQUEsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsVUFBVSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLFVBQVUsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQzNELElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDcEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBRWxELElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7aUJBQzlELFNBQVMsQ0FDUixVQUFBLElBQUk7Z0JBQ0Ys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Q0FBQyxDQUFDO1lBR3pELENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQXBCLENBQW9CLEVBQzdCLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFwQixDQUFvQixDQUFBLENBQUM7WUFDNUIsQ0FBQztRQUVKLENBQUM7SUFJSCxDQUFDO0lBM0VEO1FBQUMsWUFBSyxFQUFFOzt1REFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzt1REFBQTtJQVJWO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsV0FBVyxFQUFFLGtDQUFrQztTQUNoRCxDQUFDOzt1QkFBQTtJQWlGRixzQkFBQztBQUFELENBL0VBLEFBK0VDLElBQUE7QUEvRVksdUJBQWUsa0JBK0UzQixDQUFBIiwiZmlsZSI6ImhlYWRlci9oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9ICAgICAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgRGphbmdvU2VydmljZSB9ICAgICAgICAgICAgICBmcm9tICcuLi9zZXJ2aWNlcy9kamFuZ28uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hlYWRlci1jb21wb25lbnQnLFxuICB0ZW1wbGF0ZVVybDogJ2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG1vdXNlb3Zlcjpib29sZWFuO1xuICBASW5wdXQoKSBwbGF5ZXJfbXJ4O1xuICBASW5wdXQoKSBwbGF5ZXJfZXhwO1xuICBwbGF5ZXJfbmFtZTtcbiAgcGxheWVyX2lkO1xuICBhdmF0YXI7XG4gIGlzX3N0YWZmO1xuICBsZXZlbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kamFuZ29TZXJ2aWNlOiBEamFuZ29TZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge31cblxuICBuZ09uSW5pdCgpOmFueSB7XG5cbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGxheWVyX2lkJykpIHtcbiAgICAgIHRoaXMucGxheWVyX21yeCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwbGF5ZXJfbXJ4Jyk7XG4gICAgICB0aGlzLnBsYXllcl9leHAgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGxheWVyX2V4cCcpO1xuICAgICAgdGhpcy5wbGF5ZXJfbmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwbGF5ZXJfdXNlcm5hbWUnKTtcbiAgICAgIHRoaXMucGxheWVyX2lkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BsYXllcl9pZCcpO1xuICAgICAgdGhpcy5hdmF0YXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGxheWVyX2F2YXRhcicpO1xuICAgICAgdGhpcy5pc19zdGFmZiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwbGF5ZXJfaXNfc3RhZmYnKTtcbiAgICAgIHRoaXMubGV2ZWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGxheWVyX2xldmVsJyk7XG5cbiAgICAgIHRoaXMuX2RqYW5nb1NlcnZpY2UuZ2V0TWUobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc190b2tlbicpKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgdGhpcy5wbGF5ZXJfZXhwID0gZGF0YS5leHA7XG4gICAgICAgICAgdGhpcy5wbGF5ZXJfbXJ4ID0gZGF0YS5tcng7XG4gICAgICAgICAgdGhpcy5wbGF5ZXJfbmFtZSA9IGRhdGEudXNlcm5hbWU7XG4gICAgICAgICAgdGhpcy5hdmF0YXIgPSBkYXRhLmF2YXRhcjtcbiAgICAgICAgICB0aGlzLnBsYXllcl9pZCA9IGRhdGEuaWQ7XG4gICAgICAgICAgdGhpcy5pc19zdGFmZiA9IGRhdGEuaXNfc3RhZmY7XG4gICAgICAgICAgdGhpcy5sZXZlbCA9IGRhdGEubGV2ZWw7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BsYXllcl9pZCcsIGRhdGEuaWQpO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwbGF5ZXJfZXhwJywgZGF0YS5leHApO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwbGF5ZXJfbXJ4JywgZGF0YS5tcngpO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwbGF5ZXJfYXZhdGFyJywgZGF0YS5hdmF0YXIpO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwbGF5ZXJfaXNfc3RhZmYnLCBkYXRhLmlzX3N0YWZmKTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGxheWVyX2xldmVsJywgZGF0YS5sZXZlbCk7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BsYXllcl91c2VybmFtZScsIGRhdGEudXNlcm5hbWUpO1xuXG5cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICAgICgpID0+IGNvbnNvbGUubG9nKCdnZXRNZScpO1xuICAgICAgKTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIHRoaXMuX2RqYW5nb1NlcnZpY2UuZ2V0TWUobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc190b2tlbicpKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgdGhpcy5wbGF5ZXJfZXhwID0gZGF0YS5leHA7XG4gICAgICAgICAgdGhpcy5wbGF5ZXJfbXJ4ID0gZGF0YS5tcng7XG4gICAgICAgICAgdGhpcy5wbGF5ZXJfbmFtZSA9IGRhdGEudXNlcm5hbWU7XG4gICAgICAgICAgdGhpcy5hdmF0YXIgPSBkYXRhLmF2YXRhcjtcbiAgICAgICAgICB0aGlzLnBsYXllcl9pZCA9IGRhdGEuaWQ7XG4gICAgICAgICAgdGhpcy5pc19zdGFmZiA9IGRhdGEuaXNfc3RhZmY7XG4gICAgICAgICAgdGhpcy5sZXZlbCA9IGRhdGEubGV2ZWw7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BsYXllcl9pZCcsIGRhdGEuaWQpO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwbGF5ZXJfZXhwJywgZGF0YS5leHApO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwbGF5ZXJfbXJ4JywgZGF0YS5tcngpO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwbGF5ZXJfYXZhdGFyJywgZGF0YS5hdmF0YXIpO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwbGF5ZXJfaXNfc3RhZmYnLCBkYXRhLmlzX3N0YWZmKTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGxheWVyX2xldmVsJywgZGF0YS5sZXZlbCk7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BsYXllcl91c2VybmFtZScsIGRhdGEudXNlcm5hbWUpO1xuXG5cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICAgICgpID0+IGNvbnNvbGUubG9nKCdnZXRNZScpO1xuICAgICAgKTtcblxuICAgIH1cblxuXG5cbiAgfVxuXG59XG4iXX0=
