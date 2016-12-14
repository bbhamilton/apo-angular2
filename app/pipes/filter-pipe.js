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
var MyFilterPipe = (function () {
    function MyFilterPipe() {
    }
    MyFilterPipe.prototype.transform = function (items, args) {
        if (args == '') {
            return items;
        }
        else {
            return items.filter(function (item) {
                return item['name'].toLowerCase().indexOf(args) >= 0;
            });
        }
    };
    MyFilterPipe = __decorate([
        core_1.Pipe({
            name: 'myfilter'
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MyFilterPipe);
    return MyFilterPipe;
}());
exports.MyFilterPipe = MyFilterPipe;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpcGVzL2ZpbHRlci1waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0QsZUFBZSxDQUFDLENBQUE7QUFRaEU7SUFBQTtJQWFBLENBQUM7SUFaRyxnQ0FBUyxHQUFULFVBQVUsS0FBSyxFQUFFLElBQUk7UUFFbkIsRUFBRSxDQUFBLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDZCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2YsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJO2dCQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDdEQsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0lBRUgsQ0FBQztJQWxCTDtRQUFDLFdBQUksQ0FBQztZQUNGLElBQUksRUFBRSxVQUFVO1NBQ25CLENBQUM7UUFFRCxpQkFBVSxFQUFFOztvQkFBQTtJQWViLG1CQUFDO0FBQUQsQ0FiQSxBQWFDLElBQUE7QUFiWSxvQkFBWSxlQWF4QixDQUFBIiwiZmlsZSI6InBpcGVzL2ZpbHRlci1waXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gICAgbmFtZTogJ215ZmlsdGVyJ1xufSlcblxuQEluamVjdGFibGUoKVxuXG5leHBvcnQgY2xhc3MgTXlGaWx0ZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gICAgdHJhbnNmb3JtKGl0ZW1zLCBhcmdzKTogYW55IHtcblxuICAgICAgaWYoYXJncyA9PSAnJykge1xuICAgICAgICByZXR1cm4gaXRlbXM7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGl0ZW1zLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgICByZXR1cm4gaXRlbVsnbmFtZSddLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihhcmdzKSA+PSAwXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgfVxufVxuIl19
