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
var angular2_notifications_1 = require('angular2-notifications');
var django_service_1 = require('../services/django.service');
var TasksComponent = (function () {
    function TasksComponent(router, route, _djangoService, _service, _push) {
        this.router = router;
        this.route = route;
        this._djangoService = _djangoService;
        this._service = _service;
        this._push = _push;
        this.options = {
            timeOut: 4000,
            lastOnBottom: true,
            clickToClose: true,
            maxLength: 0,
            maxStack: 7,
            showProgressBar: true,
            pauseOnHover: true,
            preventDuplicates: true,
            preventLastDuplicates: 'visible',
            rtl: false,
            animate: 'scale',
            position: ['right', 'bottom']
        };
    }
    TasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        console.log('id = ' + this.id);
        this._service.create('Just a title');
        this._djangoService.getChallengeList(localStorage.getItem('access_token'))
            .subscribe(function (data) {
            _this.tasksData = data;
            console.dir(data);
        }, function (error) { return console.error(error); }, function () { return console.log('done'); });
    };
    TasksComponent.prototype.onCreate = function (event) {
        console.log(event);
    };
    TasksComponent.prototype.onDestroy = function (event) {
        console.log(event);
    };
    TasksComponent.prototype.playChallenge = function (event, action_id) {
        var _this = this;
        event.preventDefault();
        this._djangoService.playChallenge(localStorage.getItem('access_token'), localStorage.getItem('player_id'), action_id).subscribe(function (data) {
            console.dir(data);
            _this.player_exp = data.user_exp;
            _this.player_mrx = data.user_mrx;
            localStorage.setItem('player_exp', _this.player_exp);
            localStorage.setItem('player_mrx', _this.player_mrx);
            _this._service.html('<h2 class="sn-title">' + data.name + '</h2><p class="sn-content">Your points has been added successfully.</p> <img class="sn-badge" src="' + data.badges[0].image + '"/>', 'alert');
        }, function (error) { return console.error(error); }, function () { return console.log('playAction'); });
    };
    TasksComponent = __decorate([
        core_1.Component({
            selector: 'tasks',
            templateUrl: 'app/tasks/tasks.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, django_service_1.DjangoService, angular2_notifications_1.NotificationsService, angular2_notifications_1.PushNotificationsService])
    ], TasksComponent);
    return TasksComponent;
}());
exports.TasksComponent = TasksComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUMsWUFBWSxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNwRCxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFcEQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxxR0FBcUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDMU0sQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBcEIsQ0FBb0IsRUFDN0IsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQXpCLENBQXlCLENBRWhDLENBQUM7SUFDTixDQUFDO0lBbEZIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFdBQVcsRUFBRSxnQ0FBZ0M7U0FDOUMsQ0FBQzs7c0JBQUE7SUFpRkYscUJBQUM7QUFBRCxDQS9FQSxBQStFQyxJQUFBO0FBL0VZLHNCQUFjLGlCQStFMUIsQ0FBQSIsImZpbGUiOiJ0YXNrcy90YXNrcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9ICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnNTZXJ2aWNlLCBTaW1wbGVOb3RpZmljYXRpb25zQ29tcG9uZW50LCBPcHRpb25zLCBQdXNoTm90aWZpY2F0aW9uc1NlcnZpY2UgfSBmcm9tICdhbmd1bGFyMi1ub3RpZmljYXRpb25zJztcblxuaW1wb3J0IHsgRGphbmdvU2VydmljZSB9ICAgICAgICAgICAgIGZyb20gJy4uL3NlcnZpY2VzL2RqYW5nby5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFza3MnLFxuICB0ZW1wbGF0ZVVybDogJ2FwcC90YXNrcy90YXNrcy5jb21wb25lbnQuaHRtbCcsXG59KVxuXG5leHBvcnQgY2xhc3MgVGFza3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICB0YXNrc0RhdGE7XG4gIGlkO1xuICBwbGF5ZXJfZXhwO1xuICBwbGF5ZXJfbXJ4O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBfZGphbmdvU2VydmljZTogRGphbmdvU2VydmljZSxcbiAgICBwcml2YXRlIF9zZXJ2aWNlOiBOb3RpZmljYXRpb25zU2VydmljZSxcbiAgICBwcml2YXRlIF9wdXNoOiBQdXNoTm90aWZpY2F0aW9uc1NlcnZpY2VcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ2lkJ107XG4gICAgY29uc29sZS5sb2coJ2lkID0gJyArICB0aGlzLmlkKTtcbiAgICB0aGlzLl9zZXJ2aWNlLmNyZWF0ZSgnSnVzdCBhIHRpdGxlJyk7XG5cbiAgICB0aGlzLl9kamFuZ29TZXJ2aWNlLmdldENoYWxsZW5nZUxpc3QobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc190b2tlbicpKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgdGhpcy50YXNrc0RhdGEgPSBkYXRhO1xuICAgICAgICAgIGNvbnNvbGUuZGlyKGRhdGEpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgICAgKCkgPT4gY29uc29sZS5sb2coJ2RvbmUnKVxuXG4gICAgICApO1xuXG4gIH1cblxuICBvbkNyZWF0ZShldmVudCkge1xuICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICB9XG5cbiAgb25EZXN0cm95KGV2ZW50KSB7XG4gICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gIH1cblxuICBwdWJsaWMgb3B0aW9ucyA9IHtcbiAgICAgIHRpbWVPdXQ6IDQwMDAsXG4gICAgICBsYXN0T25Cb3R0b206IHRydWUsXG4gICAgICBjbGlja1RvQ2xvc2U6IHRydWUsXG4gICAgICBtYXhMZW5ndGg6IDAsXG4gICAgICBtYXhTdGFjazogNyxcbiAgICAgIHNob3dQcm9ncmVzc0JhcjogdHJ1ZSxcbiAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgICAgIHByZXZlbnREdXBsaWNhdGVzOiB0cnVlLFxuICAgICAgcHJldmVudExhc3REdXBsaWNhdGVzOiAndmlzaWJsZScsXG4gICAgICBydGw6IGZhbHNlLFxuICAgICAgYW5pbWF0ZTogJ3NjYWxlJyxcbiAgICAgIHBvc2l0aW9uOiBbJ3JpZ2h0JywgJ2JvdHRvbSddXG4gIH07XG5cbiAgcGxheUNoYWxsZW5nZShldmVudCwgYWN0aW9uX2lkKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXG4gICAgdGhpcy5fZGphbmdvU2VydmljZS5wbGF5Q2hhbGxlbmdlKFxuICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc190b2tlbicpLFxuICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BsYXllcl9pZCcpLFxuICAgICAgYWN0aW9uX2lkLFxuICAgICkuc3Vic2NyaWJlKFxuICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICBjb25zb2xlLmRpcihkYXRhKTtcbiAgICAgICAgICB0aGlzLnBsYXllcl9leHAgPSBkYXRhLnVzZXJfZXhwO1xuICAgICAgICAgIHRoaXMucGxheWVyX21yeCA9IGRhdGEudXNlcl9tcng7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BsYXllcl9leHAnLCB0aGlzLnBsYXllcl9leHApO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwbGF5ZXJfbXJ4JywgdGhpcy5wbGF5ZXJfbXJ4KTtcblxuICAgICAgICAgIHRoaXMuX3NlcnZpY2UuaHRtbCgnPGgyIGNsYXNzPVwic24tdGl0bGVcIj4nICsgZGF0YS5uYW1lICsgJzwvaDI+PHAgY2xhc3M9XCJzbi1jb250ZW50XCI+WW91ciBwb2ludHMgaGFzIGJlZW4gYWRkZWQgc3VjY2Vzc2Z1bGx5LjwvcD4gPGltZyBjbGFzcz1cInNuLWJhZGdlXCIgc3JjPVwiJyArIGRhdGEuYmFkZ2VzWzBdLmltYWdlICsgJ1wiLz4nLCAnYWxlcnQnKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICAgICgpID0+IGNvbnNvbGUubG9nKCdwbGF5QWN0aW9uJylcblxuICAgICAgKTtcbiAgfVxuXG59XG4iXX0=
