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
            }, function (error) {
                _this._router.navigate(['/logout']);
            }, function () { return console.log('getMe'); });
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
            }, function (error) {
                _this._router.navigate(['/logout']);
            }, function () { return console.log('getMe'); });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFDM0QsdUJBQTJDLGlCQUFpQixDQUFDLENBQUE7QUFFN0QsK0JBQTJDLDRCQUE0QixDQUFDLENBQUE7QUFPeEU7SUFVRSx5QkFBb0IsY0FBNkIsRUFBVSxPQUFlO1FBQXRELG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtJQUFHLENBQUM7SUFFOUUsa0NBQVEsR0FBUjtRQUFBLGlCQW1FQztRQWpFQyxFQUFFLENBQUEsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsVUFBVSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLFVBQVUsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQzNELElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDcEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBRWxELElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7aUJBQzlELFNBQVMsQ0FDUixVQUFBLElBQUk7Z0JBQ0Ys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QUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN6RCxDQUFDLEVBQ0QsVUFBQSxLQUFLO2dCQUNILEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNyQyxDQUFDLEVBQ0QsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQXBCLENBQW9CLENBQUEsQ0FBQztZQUM1QixDQUFDO1FBRUosQ0FBQztJQUlILENBQUM7SUE3RUQ7UUFBQyxZQUFLLEVBQUU7O3VEQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7O3VEQUFBO0lBUlY7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixXQUFXLEVBQUUsa0NBQWtDO1NBQ2hELENBQUM7O3VCQUFBO0lBbUZGLHNCQUFDO0FBQUQsQ0FqRkEsQUFpRkMsSUFBQTtBQWpGWSx1QkFBZSxrQkFpRjNCLENBQUEiLCJmaWxlIjoiaGVhZGVyL2hlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gICAgICAgICAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBEamFuZ29TZXJ2aWNlIH0gICAgICAgICAgICAgIGZyb20gJy4uL3NlcnZpY2VzL2RqYW5nby5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaGVhZGVyLWNvbXBvbmVudCcsXG4gIHRlbXBsYXRlVXJsOiAnYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbW91c2VvdmVyOmJvb2xlYW47XG4gIEBJbnB1dCgpIHBsYXllcl9tcng7XG4gIEBJbnB1dCgpIHBsYXllcl9leHA7XG4gIHBsYXllcl9uYW1lO1xuICBwbGF5ZXJfaWQ7XG4gIGF2YXRhcjtcbiAgaXNfc3RhZmY7XG4gIGxldmVsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RqYW5nb1NlcnZpY2U6IERqYW5nb1NlcnZpY2UsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7fVxuXG4gIG5nT25Jbml0KCk6YW55IHtcblxuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwbGF5ZXJfaWQnKSkge1xuICAgICAgdGhpcy5wbGF5ZXJfbXJ4ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BsYXllcl9tcngnKTtcbiAgICAgIHRoaXMucGxheWVyX2V4cCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwbGF5ZXJfZXhwJyk7XG4gICAgICB0aGlzLnBsYXllcl9uYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BsYXllcl91c2VybmFtZScpO1xuICAgICAgdGhpcy5wbGF5ZXJfaWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGxheWVyX2lkJyk7XG4gICAgICB0aGlzLmF2YXRhciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwbGF5ZXJfYXZhdGFyJyk7XG4gICAgICB0aGlzLmlzX3N0YWZmID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BsYXllcl9pc19zdGFmZicpO1xuICAgICAgdGhpcy5sZXZlbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwbGF5ZXJfbGV2ZWwnKTtcblxuICAgICAgdGhpcy5fZGphbmdvU2VydmljZS5nZXRNZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzX3Rva2VuJykpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICB0aGlzLnBsYXllcl9leHAgPSBkYXRhLmV4cDtcbiAgICAgICAgICB0aGlzLnBsYXllcl9tcnggPSBkYXRhLm1yeDtcbiAgICAgICAgICB0aGlzLnBsYXllcl9uYW1lID0gZGF0YS51c2VybmFtZTtcbiAgICAgICAgICB0aGlzLmF2YXRhciA9IGRhdGEuYXZhdGFyO1xuICAgICAgICAgIHRoaXMucGxheWVyX2lkID0gZGF0YS5pZDtcbiAgICAgICAgICB0aGlzLmlzX3N0YWZmID0gZGF0YS5pc19zdGFmZjtcbiAgICAgICAgICB0aGlzLmxldmVsID0gZGF0YS5sZXZlbDtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGxheWVyX2lkJywgZGF0YS5pZCk7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BsYXllcl9leHAnLCBkYXRhLmV4cCk7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BsYXllcl9tcngnLCBkYXRhLm1yeCk7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BsYXllcl9hdmF0YXInLCBkYXRhLmF2YXRhcik7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BsYXllcl9pc19zdGFmZicsIGRhdGEuaXNfc3RhZmYpO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwbGF5ZXJfbGV2ZWwnLCBkYXRhLmxldmVsKTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGxheWVyX3VzZXJuYW1lJywgZGF0YS51c2VybmFtZSk7XG5cblxuICAgICAgICB9LFxuICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2xvZ291dCddKTtcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4gY29uc29sZS5sb2coJ2dldE1lJyk7XG4gICAgICApO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgdGhpcy5fZGphbmdvU2VydmljZS5nZXRNZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzX3Rva2VuJykpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICB0aGlzLnBsYXllcl9leHAgPSBkYXRhLmV4cDtcbiAgICAgICAgICB0aGlzLnBsYXllcl9tcnggPSBkYXRhLm1yeDtcbiAgICAgICAgICB0aGlzLnBsYXllcl9uYW1lID0gZGF0YS51c2VybmFtZTtcbiAgICAgICAgICB0aGlzLmF2YXRhciA9IGRhdGEuYXZhdGFyO1xuICAgICAgICAgIHRoaXMucGxheWVyX2lkID0gZGF0YS5pZDtcbiAgICAgICAgICB0aGlzLmlzX3N0YWZmID0gZGF0YS5pc19zdGFmZjtcbiAgICAgICAgICB0aGlzLmxldmVsID0gZGF0YS5sZXZlbDtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGxheWVyX2lkJywgZGF0YS5pZCk7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BsYXllcl9leHAnLCBkYXRhLmV4cCk7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BsYXllcl9tcngnLCBkYXRhLm1yeCk7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BsYXllcl9hdmF0YXInLCBkYXRhLmF2YXRhcik7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BsYXllcl9pc19zdGFmZicsIGRhdGEuaXNfc3RhZmYpO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwbGF5ZXJfbGV2ZWwnLCBkYXRhLmxldmVsKTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGxheWVyX3VzZXJuYW1lJywgZGF0YS51c2VybmFtZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvbG9nb3V0J10pO1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygnZ2V0TWUnKTtcbiAgICAgICk7XG5cbiAgICB9XG5cblxuXG4gIH1cblxufVxuIl19
