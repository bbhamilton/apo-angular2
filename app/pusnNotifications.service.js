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
var PushNotificationsService = (function () {
    function PushNotificationsService() {
        this._canCreate = false;
    }
    PushNotificationsService.prototype.create = function (data, options) {
        // if (!this.canCreate) {
        //     this.notificationBuffer = data;
        //     this.getPermission();
        //     return;
        // }
        var notification = new Notification(data.title, {
            body: data.body
        });
        //
        // options.events.forEach(event => )
        return notification;
    };
    PushNotificationsService.prototype.getPermission = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!("Notification" in window))
                return reject("This browser does not support desktop notification.");
            if (Notification.permission === "granted") {
                _this._canCreate = true;
                return resolve("Permission was already granted");
            }
            if (Notification.permission !== "denied") {
                Notification.requestPermission()
                    .then(function (a) {
                    if (a === "denied")
                        return reject("Permission wasn't granted");
                    if (a === "default")
                        return reject("The permission request was dismissed.");
                    _this._canCreate = true;
                    resolve("Permission granted");
                });
            }
        });
    };
    PushNotificationsService.prototype.createBuffered = function () {
        this.canCreate = true;
        if (this.notificationBuffer) {
            this.create(this.notificationBuffer);
            this.notificationBuffer = null;
        }
    };
    PushNotificationsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PushNotificationsService);
    return PushNotificationsService;
}());
exports.PushNotificationsService = PushNotificationsService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1c25Ob3RpZmljYXRpb25zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF1QyxlQUN2QyxDQUFDLENBRHFEO0FBTXREO0lBQUE7UUFDWSxlQUFVLEdBQVksS0FBSyxDQUFDO0lBZ0R4QyxDQUFDO0lBOUNHLHlDQUFNLEdBQU4sVUFBTyxJQUFzQixFQUFFLE9BQWdDO1FBQzNELHlCQUF5QjtRQUN6QixzQ0FBc0M7UUFDdEMsNEJBQTRCO1FBQzVCLGNBQWM7UUFDZCxJQUFJO1FBRUosSUFBSSxZQUFZLEdBQUcsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUM1QyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7U0FDbEIsQ0FBQyxDQUFDO1FBQ0gsRUFBRTtRQUNGLG9DQUFvQztRQUdwQyxNQUFNLENBQUMsWUFBWSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxnREFBYSxHQUFiO1FBQUEsaUJBb0JDO1FBbkJHLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQy9CLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLElBQUksTUFBTSxDQUFDLENBQUM7Z0JBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxxREFBcUQsQ0FBQyxDQUFDO1lBRXZHLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDeEMsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZCLE1BQU0sQ0FBQyxPQUFPLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztZQUNyRCxDQUFDO1lBRUQsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLFVBQVUsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxZQUFZLENBQUMsaUJBQWlCLEVBQUU7cUJBQzNCLElBQUksQ0FBQyxVQUFBLENBQUM7b0JBQ0gsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsQ0FBQzt3QkFBQyxNQUFNLENBQUMsTUFBTSxDQUFDLDJCQUEyQixDQUFDLENBQUM7b0JBQy9ELEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLENBQUM7d0JBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO29CQUU1RSxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztvQkFDdkIsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUE7Z0JBQ2pDLENBQUMsQ0FBQyxDQUFBO1lBQ1YsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVPLGlEQUFjLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7UUFDbkMsQ0FBQztJQUNMLENBQUM7SUFqREw7UUFBQyxpQkFBVSxFQUFFOztnQ0FBQTtJQWtEYiwrQkFBQztBQUFELENBakRBLEFBaURDLElBQUE7QUFqRFksZ0NBQXdCLDJCQWlEcEMsQ0FBQSIsImZpbGUiOiJwdXNuTm90aWZpY2F0aW9ucy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXJ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anNcIlxuXG5kZWNsYXJlIHZhciBOb3RpZmljYXRpb247XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQdXNoTm90aWZpY2F0aW9uc1NlcnZpY2Uge1xuICAgIHByaXZhdGUgX2NhbkNyZWF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY3JlYXRlKGRhdGE6IFB1c2hOb3RpZmljYXRpb24sIG9wdGlvbnM6IFB1c2hOb3RpZmljYXRpb25PcHRpb25zKSB7XG4gICAgICAgIC8vIGlmICghdGhpcy5jYW5DcmVhdGUpIHtcbiAgICAgICAgLy8gICAgIHRoaXMubm90aWZpY2F0aW9uQnVmZmVyID0gZGF0YTtcbiAgICAgICAgLy8gICAgIHRoaXMuZ2V0UGVybWlzc2lvbigpO1xuICAgICAgICAvLyAgICAgcmV0dXJuO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgbGV0IG5vdGlmaWNhdGlvbiA9IG5ldyBOb3RpZmljYXRpb24oZGF0YS50aXRsZSwge1xuICAgICAgICAgICAgYm9keTogZGF0YS5ib2R5XG4gICAgICAgIH0pO1xuICAgICAgICAvL1xuICAgICAgICAvLyBvcHRpb25zLmV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IClcblxuXG4gICAgICAgIHJldHVybiBub3RpZmljYXRpb247XG4gICAgfVxuXG4gICAgZ2V0UGVybWlzc2lvbigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmICghKFwiTm90aWZpY2F0aW9uXCIgaW4gd2luZG93KSkgIHJldHVybiByZWplY3QoXCJUaGlzIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBkZXNrdG9wIG5vdGlmaWNhdGlvbi5cIik7XG5cbiAgICAgICAgICAgIGlmIChOb3RpZmljYXRpb24ucGVybWlzc2lvbiA9PT0gXCJncmFudGVkXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW5DcmVhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKFwiUGVybWlzc2lvbiB3YXMgYWxyZWFkeSBncmFudGVkXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gIT09IFwiZGVuaWVkXCIpIHtcbiAgICAgICAgICAgICAgICBOb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhID09PSBcImRlbmllZFwiKSByZXR1cm4gcmVqZWN0KFwiUGVybWlzc2lvbiB3YXNuJ3QgZ3JhbnRlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhID09PSBcImRlZmF1bHRcIikgcmV0dXJuIHJlamVjdChcIlRoZSBwZXJtaXNzaW9uIHJlcXVlc3Qgd2FzIGRpc21pc3NlZC5cIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhbkNyZWF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKFwiUGVybWlzc2lvbiBncmFudGVkXCIpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVCdWZmZXJlZCgpIHtcbiAgICAgICAgdGhpcy5jYW5DcmVhdGUgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5ub3RpZmljYXRpb25CdWZmZXIpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlKHRoaXMubm90aWZpY2F0aW9uQnVmZmVyKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uQnVmZmVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBQdXNoTm90aWZpY2F0aW9uIHtcbiAgICB0aXRsZTogc3RyaW5nXG4gICAgYm9keTogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHVzaE5vdGlmaWNhdGlvbk9wdGlvbnMge1xuICAgIGV2ZW50czogc3RyaW5nW11cbn1cbiJdfQ==
