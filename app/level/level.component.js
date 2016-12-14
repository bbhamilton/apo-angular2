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
var LevelComponent = (function () {
    function LevelComponent(router, _djangoService) {
        this.router = router;
        this._djangoService = _djangoService;
        this.companyInfo = 0;
        this.players = 0;
        this.exp_of_current_level = 2000;
        this.current_exp = 3800;
        this.exp_to_next_level = 4000;
        this.total = 0;
        this.level_name = 0;
    }
    LevelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._djangoService.getCompanyInfo(localStorage.getItem('access_token'))
            .subscribe(function (data) {
            _this.companyInfo = data;
            console.log('---');
            console.dir(data);
            _this.level_name = data.level_info.level_name;
            console.log(_this.level_name);
            _this.current_exp = data.level_info.current_exp;
            console.log(_this.current_exp);
            _this.level_name = data.level_info.level_name;
            console.log(_this.level_name);
            _this.next_level_name = data.level_info.next_level_name;
            console.log(_this.next_level_name);
            _this.next_level = data.level_info.next_level;
            console.log(_this.next_level);
            _this.current_level = data.level;
            console.log(_this.current_level);
            _this.exp_to_next_level = data.level_info.exp_to_next_level;
            console.log(_this.exp_to_next_level);
            console.log('---');
        }, function (error) { return console.error(error); }, function () { return console.log('Django - odpowiedź'); });
    };
    LevelComponent = __decorate([
        core_1.Component({
            selector: 'level',
            templateUrl: 'app/level/level.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router, django_service_1.DjangoService])
    ], LevelComponent);
    return LevelComponent;
}());
exports.LevelComponent = LevelComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxldmVsL2xldmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQW1DLGVBQWUsQ0FBQyxDQUFBO0FBQ25ELHVCQUFtQyxpQkFBaUIsQ0FBQyxDQUFBO0FBRXJELCtCQUFtQyw0QkFBNEIsQ0FBQyxDQUFBO0FBT2hFO0lBY0Usd0JBQW9CLE1BQWMsRUFBVSxjQUE2QjtRQUFyRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFaekUsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLHlCQUFvQixHQUFHLElBQUksQ0FBQztRQUM1QixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFDekIsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNWLGVBQVUsR0FBRyxDQUFDLENBQUM7SUFNOEQsQ0FBQztJQUU5RSxpQ0FBUSxHQUFSO1FBQUEsaUJBNEJDO1FBMUJDLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDdkUsU0FBUyxDQUNSLFVBQUEsSUFBSTtZQUNGLEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO1lBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzdCLEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7WUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDOUIsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztZQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM3QixLQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDO1lBQ3ZELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7WUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDN0IsS0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDO1lBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFwQixDQUFvQixFQUM3QixjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFqQyxDQUFpQyxDQUN4QyxDQUFDO0lBRUosQ0FBQztJQWpESDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsT0FBTztZQUNqQixXQUFXLEVBQUUsZ0NBQWdDO1NBQzlDLENBQUM7O3NCQUFBO0lBZ0RGLHFCQUFDO0FBQUQsQ0E5Q0EsQUE4Q0MsSUFBQTtBQTlDWSxzQkFBYyxpQkE4QzFCLENBQUEiLCJmaWxlIjoibGV2ZWwvbGV2ZWwuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9ICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IERqYW5nb1NlcnZpY2UgfSAgICAgIGZyb20gJy4uL3NlcnZpY2VzL2RqYW5nby5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGV2ZWwnLFxuICB0ZW1wbGF0ZVVybDogJ2FwcC9sZXZlbC9sZXZlbC5jb21wb25lbnQuaHRtbCcsXG59KVxuXG5leHBvcnQgY2xhc3MgTGV2ZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbXBhbnlJbmZvID0gMDtcbiAgcGxheWVycyA9IDA7XG4gIGV4cF9vZl9jdXJyZW50X2xldmVsID0gMjAwMDtcbiAgY3VycmVudF9leHAgPSAzODAwO1xuICBleHBfdG9fbmV4dF9sZXZlbCA9IDQwMDA7XG4gIHRvdGFsID0gMDtcbiAgbGV2ZWxfbmFtZSA9IDA7XG4gIG5leHRfbGV2ZWxfbmFtZTtcbiAgbmV4dF9sZXZlbDtcbiAgY3VycmVudF9sZXZlbDtcbiAgbGV2ZWxfaW5mbztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIF9kamFuZ29TZXJ2aWNlOiBEamFuZ29TZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgIHRoaXMuX2RqYW5nb1NlcnZpY2UuZ2V0Q29tcGFueUluZm8obG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc190b2tlbicpKVxuICAgIC5zdWJzY3JpYmUoXG4gICAgICBkYXRhID0+IHtcbiAgICAgICAgdGhpcy5jb21wYW55SW5mbyA9IGRhdGE7XG4gICAgICAgIGNvbnNvbGUubG9nKCctLS0nKTtcbiAgICAgICAgY29uc29sZS5kaXIoZGF0YSk7XG4gICAgICAgIHRoaXMubGV2ZWxfbmFtZSA9IGRhdGEubGV2ZWxfaW5mby5sZXZlbF9uYW1lO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxldmVsX25hbWUpO1xuICAgICAgICB0aGlzLmN1cnJlbnRfZXhwID0gZGF0YS5sZXZlbF9pbmZvLmN1cnJlbnRfZXhwO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRfZXhwKTtcbiAgICAgICAgdGhpcy5sZXZlbF9uYW1lID0gZGF0YS5sZXZlbF9pbmZvLmxldmVsX25hbWU7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGV2ZWxfbmFtZSk7XG4gICAgICAgIHRoaXMubmV4dF9sZXZlbF9uYW1lID0gZGF0YS5sZXZlbF9pbmZvLm5leHRfbGV2ZWxfbmFtZTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5uZXh0X2xldmVsX25hbWUpO1xuICAgICAgICB0aGlzLm5leHRfbGV2ZWwgPSBkYXRhLmxldmVsX2luZm8ubmV4dF9sZXZlbDtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5uZXh0X2xldmVsKTtcbiAgICAgICAgdGhpcy5jdXJyZW50X2xldmVsID0gZGF0YS5sZXZlbDtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50X2xldmVsKTtcbiAgICAgICAgdGhpcy5leHBfdG9fbmV4dF9sZXZlbCA9IGRhdGEubGV2ZWxfaW5mby5leHBfdG9fbmV4dF9sZXZlbDtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5leHBfdG9fbmV4dF9sZXZlbCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCctLS0nKTtcbiAgICAgIH0sXG4gICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgICgpID0+IGNvbnNvbGUubG9nKCdEamFuZ28gLSBvZHBvd2llZMW6JyksXG4gICAgKTtcblxuICB9XG5cbn1cbiJdfQ==
