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
var TaskFilter = (function () {
    function TaskFilter() {
    }
    TaskFilter.prototype.transform = function (items, args) {
        if (args == '') {
            return items;
        }
        else {
            return items.filter(function (item) {
                return item['name'].toLowerCase().indexOf(args) >= 0;
            });
        }
    };
    TaskFilter = __decorate([
        core_1.Pipe({
            name: 'taskFilter'
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TaskFilter);
    return TaskFilter;
}());
exports.TaskFilter = TaskFilter;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpcGVzL3Rhc2tmaWx0ZXIucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdELGVBQWUsQ0FBQyxDQUFBO0FBUWhFO0lBQUE7SUFhQSxDQUFDO0lBWkcsOEJBQVMsR0FBVCxVQUFVLEtBQUssRUFBRSxJQUFJO1FBRW5CLEVBQUUsQ0FBQSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2QsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNmLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNKLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSTtnQkFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ3RELENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztJQUVILENBQUM7SUFsQkw7UUFBQyxXQUFJLENBQUM7WUFDRixJQUFJLEVBQUUsWUFBWTtTQUNyQixDQUFDO1FBRUQsaUJBQVUsRUFBRTs7a0JBQUE7SUFlYixpQkFBQztBQUFELENBYkEsQUFhQyxJQUFBO0FBYlksa0JBQVUsYUFhdEIsQ0FBQSIsImZpbGUiOiJwaXBlcy90YXNrZmlsdGVyLnBpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgICBuYW1lOiAndGFza0ZpbHRlcidcbn0pXG5cbkBJbmplY3RhYmxlKClcblxuZXhwb3J0IGNsYXNzIFRhc2tGaWx0ZXIgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgICB0cmFuc2Zvcm0oaXRlbXMsIGFyZ3MpOiBhbnkge1xuXG4gICAgICBpZihhcmdzID09ICcnKSB7XG4gICAgICAgIHJldHVybiBpdGVtcztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gaXRlbXMuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICAgIHJldHVybiBpdGVtWyduYW1lJ10udG9Mb3dlckNhc2UoKS5pbmRleE9mKGFyZ3MpID49IDBcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICB9XG59XG4iXX0=
