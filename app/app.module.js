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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var angular2_notifications_1 = require('angular2-notifications');
var app_component_1 = require('./app.component');
var main_component_1 = require('./main.component');
var login_component_1 = require('./login.component');
var logout_component_1 = require('./logout.component');
var header_component_1 = require('./header/header.component');
var footer_component_1 = require('./footer/footer.component');
var leaderboard_component_1 = require('./leaderboard/leaderboard.component');
var level_component_1 = require('./level/level.component');
var pevex_component_1 = require('./pevex/pevex.component');
var profile_component_1 = require('./profile/profile.component');
var tasks_component_1 = require('./tasks/tasks.component');
var loader_component_1 = require('./loader.component');
var taskfilter_pipe_1 = require('./pipes/taskfilter.pipe');
var django_service_1 = require('./services/django.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                angular2_notifications_1.SimpleNotificationsModule,
                angular2_notifications_1.PushNotificationsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot([
                    { path: '', component: loader_component_1.LoaderComponent, pathMatch: 'full' },
                    { path: 'apo', component: loader_component_1.LoaderComponent },
                    { path: 'leaderboard', component: main_component_1.MainComponent },
                    { path: 'login', component: login_component_1.LoginComponent },
                    { path: 'logout', component: logout_component_1.LogoutComponent },
                    { path: 'challenges', component: tasks_component_1.TasksComponent },
                    { path: 'pevex', component: pevex_component_1.PevexComponent },
                    { path: 'profile', component: profile_component_1.ProfileComponent },
                    { path: 'profiles/:id', component: profile_component_1.ProfileComponent },
                ])
            ],
            providers: [
                django_service_1.DjangoService
            ],
            declarations: [
                login_component_1.LoginComponent,
                logout_component_1.LogoutComponent,
                main_component_1.MainComponent,
                loader_component_1.LoaderComponent,
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                leaderboard_component_1.LeaderboardComponent,
                level_component_1.LevelComponent,
                pevex_component_1.PevexComponent,
                profile_component_1.ProfileComponent,
                tasks_component_1.TasksComponent,
                taskfilter_pipe_1.TaskFilter
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQyxlQUFlLENBQUMsQ0FBQTtBQUMzRCxpQ0FBMkMsMkJBQTJCLENBQUMsQ0FBQTtBQUN2RSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFDM0QsdUJBQTJDLGlCQUFpQixDQUFDLENBQUE7QUFDN0QsdUNBQW9FLHdCQUF3QixDQUFDLENBQUE7QUFFN0YsOEJBQTJDLGlCQUFpQixDQUFDLENBQUE7QUFDN0QsK0JBQTJDLGtCQUFrQixDQUFDLENBQUE7QUFDOUQsZ0NBQTJDLG1CQUFtQixDQUFDLENBQUE7QUFDL0QsaUNBQTJDLG9CQUFvQixDQUFDLENBQUE7QUFDaEUsaUNBQTJDLDJCQUEyQixDQUFDLENBQUE7QUFDdkUsaUNBQTJDLDJCQUEyQixDQUFDLENBQUE7QUFDdkUsc0NBQTJDLHFDQUFxQyxDQUFDLENBQUE7QUFDakYsZ0NBQTJDLHlCQUF5QixDQUFDLENBQUE7QUFDckUsZ0NBQTJDLHlCQUF5QixDQUFDLENBQUE7QUFDckUsa0NBQTJDLDZCQUE2QixDQUFDLENBQUE7QUFDekUsZ0NBQTJDLHlCQUF5QixDQUFDLENBQUE7QUFDckUsaUNBQTJDLG9CQUFvQixDQUFDLENBQUE7QUFFaEUsZ0NBQTJDLHlCQUF5QixDQUFDLENBQUE7QUFFckUsK0JBQTJDLDJCQUEyQixDQUFDLENBQUE7QUF3Q3ZFO0lBQUE7SUFBeUIsQ0FBQztJQXRDMUI7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQU87Z0JBQ1osZ0NBQWE7Z0JBQ2Isa0RBQXlCO2dCQUN6QixnREFBdUI7Z0JBQ3ZCLGlCQUFVO2dCQUNWLHFCQUFZLENBQUMsT0FBTyxDQUFDO29CQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQWUsU0FBUyxFQUFFLGtDQUFlLEVBQUksU0FBUyxFQUFFLE1BQU0sRUFBRTtvQkFDMUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFZLFNBQVMsRUFBRSxrQ0FBZSxFQUFFO29CQUNyRCxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUksU0FBUyxFQUFFLDhCQUFhLEVBQUU7b0JBQ25ELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBVSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtvQkFDcEQsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFTLFNBQVMsRUFBRSxrQ0FBZSxFQUFFO29CQUNyRCxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUssU0FBUyxFQUFFLGdDQUFjLEVBQUU7b0JBQ3BELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBVSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtvQkFDcEQsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFRLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBRTtvQkFDdEQsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFHLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBRTtpQkFDdkQsQ0FBQzthQUNIO1lBQ0QsU0FBUyxFQUFLO2dCQUNaLDhCQUFhO2FBQ2Q7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osZ0NBQWM7Z0JBQ2Qsa0NBQWU7Z0JBQ2YsOEJBQWE7Z0JBQ2Isa0NBQWU7Z0JBQ2YsNEJBQVk7Z0JBQ1osa0NBQWU7Z0JBQ2Ysa0NBQWU7Z0JBQ2YsNENBQW9CO2dCQUNwQixnQ0FBYztnQkFDZCxnQ0FBYztnQkFDZCxvQ0FBZ0I7Z0JBQ2hCLGdDQUFjO2dCQUNkLDRCQUFVO2FBQ1g7WUFDRCxTQUFTLEVBQUssQ0FBRSw0QkFBWSxDQUFFO1NBQy9CLENBQUM7O2lCQUFBO0lBQ3VCLGdCQUFDO0FBQUQsQ0FBekIsQUFBMEIsSUFBQTtBQUFiLGlCQUFTLFlBQUksQ0FBQSIsImZpbGUiOiJhcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSAgICAgICAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSAgICAgICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2ltcGxlTm90aWZpY2F0aW9uc01vZHVsZSwgUHVzaE5vdGlmaWNhdGlvbnNNb2R1bGUgfSAgZnJvbSAnYW5ndWxhcjItbm90aWZpY2F0aW9ucyc7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9ICAgICAgICAgICAgICAgZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IE1haW5Db21wb25lbnQgfSAgICAgICAgICAgICAgZnJvbSAnLi9tYWluLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9ICAgICAgICAgICAgIGZyb20gJy4vbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IExvZ291dENvbXBvbmVudCB9ICAgICAgICAgICAgZnJvbSAnLi9sb2dvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9ICAgICAgICAgICAgZnJvbSAnLi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb290ZXJDb21wb25lbnQgfSAgICAgICAgICAgIGZyb20gJy4vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGVhZGVyYm9hcmRDb21wb25lbnQgfSAgICAgICBmcm9tICcuL2xlYWRlcmJvYXJkL2xlYWRlcmJvYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMZXZlbENvbXBvbmVudCB9ICAgICAgICAgICAgIGZyb20gJy4vbGV2ZWwvbGV2ZWwuY29tcG9uZW50JztcbmltcG9ydCB7IFBldmV4Q29tcG9uZW50IH0gICAgICAgICAgICAgZnJvbSAnLi9wZXZleC9wZXZleC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZmlsZUNvbXBvbmVudCB9ICAgICAgICAgICBmcm9tICcuL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFza3NDb21wb25lbnQgfSAgICAgICAgICAgICBmcm9tICcuL3Rhc2tzL3Rhc2tzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2FkZXJDb21wb25lbnQgfSAgICAgICAgICAgIGZyb20gJy4vbG9hZGVyLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFRhc2tGaWx0ZXIgfSAgICAgICAgICAgICAgICAgZnJvbSAnLi9waXBlcy90YXNrZmlsdGVyLnBpcGUnO1xuXG5pbXBvcnQgeyBEamFuZ29TZXJ2aWNlIH0gICAgICAgICAgICAgIGZyb20gJy4vc2VydmljZXMvZGphbmdvLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiAgICAgIFtcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIFNpbXBsZU5vdGlmaWNhdGlvbnNNb2R1bGUsXG4gICAgUHVzaE5vdGlmaWNhdGlvbnNNb2R1bGUsXG4gICAgSHR0cE1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXG4gICAgICB7IHBhdGg6ICcnLCAgICAgICAgICAgICAgY29tcG9uZW50OiBMb2FkZXJDb21wb25lbnQsICAgcGF0aE1hdGNoOiAnZnVsbCcgfSxcbiAgICAgIHsgcGF0aDogJ2FwbycsICAgICAgICAgICBjb21wb25lbnQ6IExvYWRlckNvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAnbGVhZGVyYm9hcmQnLCAgIGNvbXBvbmVudDogTWFpbkNvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAnbG9naW4nLCAgICAgICAgIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJ2xvZ291dCcsICAgICAgICBjb21wb25lbnQ6IExvZ291dENvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAnY2hhbGxlbmdlcycsICAgIGNvbXBvbmVudDogVGFza3NDb21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJ3BldmV4JywgICAgICAgICBjb21wb25lbnQ6IFBldmV4Q29tcG9uZW50IH0sXG4gICAgICB7IHBhdGg6ICdwcm9maWxlJywgICAgICAgY29tcG9uZW50OiBQcm9maWxlQ29tcG9uZW50IH1cbiAgICAgIHsgcGF0aDogJ3Byb2ZpbGVzLzppZCcsICBjb21wb25lbnQ6IFByb2ZpbGVDb21wb25lbnQgfSxcbiAgICBdKVxuICBdLFxuICBwcm92aWRlcnM6ICAgIFtcbiAgICBEamFuZ29TZXJ2aWNlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIExvZ2luQ29tcG9uZW50LFxuICAgIExvZ291dENvbXBvbmVudCxcbiAgICBNYWluQ29tcG9uZW50LFxuICAgIExvYWRlckNvbXBvbmVudCxcbiAgICBBcHBDb21wb25lbnQsXG4gICAgSGVhZGVyQ29tcG9uZW50LFxuICAgIEZvb3RlckNvbXBvbmVudCxcbiAgICBMZWFkZXJib2FyZENvbXBvbmVudCxcbiAgICBMZXZlbENvbXBvbmVudCxcbiAgICBQZXZleENvbXBvbmVudCxcbiAgICBQcm9maWxlQ29tcG9uZW50LFxuICAgIFRhc2tzQ29tcG9uZW50LFxuICAgIFRhc2tGaWx0ZXJcbiAgXSxcbiAgYm9vdHN0cmFwOiAgICBbIEFwcENvbXBvbmVudCBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==
