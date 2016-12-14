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
var PevexComponent = (function () {
    function PevexComponent(router) {
        this.router = router;
    }
    PevexComponent.prototype.ngOnInit = function () {
        console.log('pevex component');
    };
    PevexComponent = __decorate([
        core_1.Component({
            selector: 'pevex',
            template: "<header-component></header-component>\n  Pevex."
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], PevexComponent);
    return PevexComponent;
}());
exports.PevexComponent = PevexComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBldmV4L3BldmV4LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQW1DLGVBQWUsQ0FBQyxDQUFBO0FBQ25ELHVCQUFtQyxpQkFBaUIsQ0FBQyxDQUFBO0FBU3JEO0lBRUUsd0JBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUksQ0FBQztJQUV2QyxpQ0FBUSxHQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFiSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQ1IsaURBQ087U0FDUixDQUFDOztzQkFBQTtJQVVGLHFCQUFDO0FBQUQsQ0FSQSxBQVFDLElBQUE7QUFSWSxzQkFBYyxpQkFRMUIsQ0FBQSIsImZpbGUiOiJwZXZleC9wZXZleC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9ICBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGV2ZXgnLFxuICB0ZW1wbGF0ZTpcbiAgYDxoZWFkZXItY29tcG9uZW50PjwvaGVhZGVyLWNvbXBvbmVudD5cbiAgUGV2ZXguYFxufSlcblxuZXhwb3J0IGNsYXNzIFBldmV4Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZygncGV2ZXggY29tcG9uZW50Jyk7XG4gIH1cblxufVxuIl19
