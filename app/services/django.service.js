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
var http_1 = require("@angular/http");
require('rxjs/add/operator/map');
var DjangoService = (function () {
    function DjangoService(http) {
        this.http = http;
        this.url = 'http://apocalypternet.devmerix.com/';
    }
    DjangoService.prototype.authenticate = function (google_access_token) {
        var endpoint = 'auth/convert-token/';
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var params = new http_1.URLSearchParams();
        params.append('grant_type', 'convert_token');
        params.append('client_id', 'K6iaPV2btz4FdrGdfsU5RjHOWqDr0kmZgg2MFOG9');
        params.append('client_secret', '0tTfDJdeSexY7vkm1g5mNZ8pm2enVltuFGeIFOE6PIj5ghsY2ZhwaQsAbCG5B06rbDZKodTiCX0Pj7nPpZfietdoMblkonAWK3NydSFEU0MhCxfHTKSX95FTUZ5m6VqK');
        params.append('backend', 'google-oauth2');
        params.append('token', google_access_token);
        return this.http.post(this.url + endpoint, params.toString(), { headers: headers }).map(function (res) { return res.json(); });
    };
    DjangoService.prototype.getLeaderboard = function (amount_positions, django_access_token) {
        var endpoint = 'api/leaderboard/?amount_positions=' + amount_positions;
        var headers = new http_1.Headers();
        headers.append('Authorization', 'Bearer ' + django_access_token);
        return this.http.get(this.url + endpoint, { headers: headers }).map(function (res) { return res.json(); });
    };
    DjangoService.prototype.getCompanyInfo = function (django_access_token) {
        var endpoint = 'api/companies/1/';
        var headers = new http_1.Headers();
        headers.append('Authorization', 'Bearer ' + django_access_token);
        return this.http.get(this.url + endpoint, { headers: headers }).map(function (res) { return res.json(); });
    };
    DjangoService.prototype.getPlayerHistory = function (django_access_token, player_id) {
        var endpoint = 'api/profiles/' + player_id + '/history/';
        var headers = new http_1.Headers();
        headers.append('Authorization', 'Bearer ' + django_access_token);
        return this.http.get(this.url + endpoint, { headers: headers }).map(function (res) { return res.json(); });
    };
    DjangoService.prototype.getChallengeList = function (django_access_token) {
        var endpoint = 'api/challenges/';
        var headers = new http_1.Headers();
        headers.append('Authorization', 'Bearer ' + django_access_token);
        return this.http.get(this.url + endpoint, { headers: headers }).map(function (res) { return res.json(); });
    };
    DjangoService.prototype.getMe = function (django_access_token) {
        var endpoint = 'api/me/';
        var headers = new http_1.Headers();
        headers.append('Authorization', 'Bearer ' + django_access_token);
        return this.http.get(this.url + endpoint, { headers: headers }).map(function (res) { return res.json(); });
    };
    DjangoService.prototype.getProfile = function (django_access_token, player_id) {
        var endpoint = 'api/profiles/' + player_id + '/';
        var headers = new http_1.Headers();
        headers.append('Authorization', 'Bearer ' + django_access_token);
        return this.http.get(this.url + endpoint, { headers: headers }).map(function (res) { return res.json(); });
    };
    DjangoService.prototype.playChallenge = function (django_access_token, player_id, challenge_id) {
        var endpoint = 'api/profiles/' + player_id + '/challenge/';
        var headers = new http_1.Headers();
        headers.append('Authorization', 'Bearer ' + django_access_token);
        headers.append('Content-Type', 'application/json');
        var bodyString = JSON.stringify({
            'challenge': challenge_id
        });
        return this.http.post(this.url + endpoint, bodyString, { headers: headers }).map(function (res) { return res.json(); });
    };
    DjangoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DjangoService);
    return DjangoService;
}());
exports.DjangoService = DjangoService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2RqYW5nby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBK0IsZUFBZSxDQUFDLENBQUE7QUFDL0MscUJBQXlFLGVBQWUsQ0FBQyxDQUFBO0FBRXpGLFFBQU8sdUJBQXVCLENBQUMsQ0FBQTtBQUVqQjtJQUtaLHVCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUY5QixRQUFHLEdBQVcscUNBQXFDLENBQUE7SUFFbEIsQ0FBQztJQUVsQyxvQ0FBWSxHQUFaLFVBQWEsbUJBQTJCO1FBRXRDLElBQUksUUFBUSxHQUFHLHFCQUFxQixDQUFDO1FBQ3JDLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsbUNBQW1DLENBQUMsQ0FBQztRQUVwRSxJQUFJLE1BQU0sR0FBRyxJQUFJLHNCQUFlLEVBQUUsQ0FBQztRQUNuQyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUMsQ0FBQztRQUM3QyxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSwwQ0FBMEMsQ0FBQyxDQUFDO1FBQ3ZFLE1BQU0sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLGtJQUFrSSxDQUFDLENBQUM7UUFDbkssTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQUc1QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsZ0JBQU8sRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENB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Q0FBVSxDQUFDLENBQUM7SUFFN0YsQ0FBQztJQW5HSDtRQUFDLGlCQUFVLEVBQUU7O3FCQUFBO0lBcUdiLG9CQUFDO0FBQUQsQ0FyR2MsQUFxR2IsSUFBQTtBQXJHMEIscUJBQWEsZ0JBcUd2QyxDQUFBIiwiZmlsZSI6InNlcnZpY2VzL2RqYW5nby5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9ICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFVSTFNlYXJjaFBhcmFtcywgUmVzcG9uc2UsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcblxuQEluamVjdGFibGUoKSBleHBvcnQgY2xhc3MgRGphbmdvU2VydmljZSB7XG5cbiAgZGF0YTogYW55O1xuICB1cmw6IHN0cmluZyA9ICdodHRwOi8vYXBvY2FseXB0ZXJuZXQuZGV2bWVyaXguY29tLydcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHt9XG5cbiAgYXV0aGVudGljYXRlKGdvb2dsZV9hY2Nlc3NfdG9rZW46IHN0cmluZykge1xuXG4gICAgdmFyIGVuZHBvaW50ID0gJ2F1dGgvY29udmVydC10b2tlbi8nO1xuICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuXG4gICAgdmFyIHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdncmFudF90eXBlJywgJ2NvbnZlcnRfdG9rZW4nKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdjbGllbnRfaWQnLCAnSzZpYVBWMmJ0ejRGZHJHZGZzVTVSakhPV3FEcjBrbVpnZzJNRk9HOScpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ2NsaWVudF9zZWNyZXQnLCAnMHRUZkRKZGVTZXhZN3ZrbTFnNW1OWjhwbTJlblZsdHVGR2VJRk9FNlBJajVnaHNZMlpod2FRc0FiQ0c1QjA2cmJEWktvZFRpQ1gwUGo3blBwWmZpZXRkb01ibGtvbkFXSzNOeWRTRkVVME1oQ3hmSFRLU1g5NUZUVVo1bTZWcUsnKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdiYWNrZW5kJywgJ2dvb2dsZS1vYXV0aDInKTtcbiAgICBwYXJhbXMuYXBwZW5kKCd0b2tlbicsIGdvb2dsZV9hY2Nlc3NfdG9rZW4pO1xuXG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy51cmwgKyBlbmRwb2ludCwgcGFyYW1zLnRvU3RyaW5nKCksIHsgaGVhZGVycyB9KS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuXG4gIH1cblxuICBnZXRMZWFkZXJib2FyZChhbW91bnRfcG9zaXRpb25zOiBudW1iZXIsIGRqYW5nb19hY2Nlc3NfdG9rZW46IHN0cmluZykge1xuXG4gICAgdmFyIGVuZHBvaW50ID0gJ2FwaS9sZWFkZXJib2FyZC8/YW1vdW50X3Bvc2l0aW9ucz0nICsgYW1vdW50X3Bvc2l0aW9ucztcbiAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG5cbiAgICBoZWFkZXJzLmFwcGVuZCgnQXV0aG9yaXphdGlvbicsICdCZWFyZXIgJyArIGRqYW5nb19hY2Nlc3NfdG9rZW4pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy51cmwgKyBlbmRwb2ludCwgeyBoZWFkZXJzIH0pLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG5cbiAgfVxuXG4gIGdldENvbXBhbnlJbmZvKGRqYW5nb19hY2Nlc3NfdG9rZW46IHN0cmluZykge1xuXG4gICAgdmFyIGVuZHBvaW50ID0gJ2FwaS9jb21wYW5pZXMvMS8nO1xuICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblxuICAgIGhlYWRlcnMuYXBwZW5kKCdBdXRob3JpemF0aW9uJywgJ0JlYXJlciAnICsgZGphbmdvX2FjY2Vzc190b2tlbik7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnVybCArIGVuZHBvaW50LCB7IGhlYWRlcnMgfSkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcblxuICB9XG5cbiAgZ2V0UGxheWVySGlzdG9yeShkamFuZ29fYWNjZXNzX3Rva2VuOiBzdHJpbmcsIHBsYXllcl9pZDogbnVtYmVyKSB7XG5cbiAgICB2YXIgZW5kcG9pbnQgPSAnYXBpL3Byb2ZpbGVzLycgKyBwbGF5ZXJfaWQgKyAnL2hpc3RvcnkvJztcbiAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG5cbiAgICBoZWFkZXJzLmFwcGVuZCgnQXV0aG9yaXphdGlvbicsICdCZWFyZXIgJyArIGRqYW5nb19hY2Nlc3NfdG9rZW4pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy51cmwgKyBlbmRwb2ludCwgeyBoZWFkZXJzIH0pLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG5cbiAgfVxuXG4gIGdldENoYWxsZW5nZUxpc3QoZGphbmdvX2FjY2Vzc190b2tlbjogc3RyaW5nKSB7XG4gICAgdmFyIGVuZHBvaW50ID0gJ2FwaS9jaGFsbGVuZ2VzLyc7XG4gICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuXG4gICAgaGVhZGVycy5hcHBlbmQoJ0F1dGhvcml6YXRpb24nLCAnQmVhcmVyICcgKyBkamFuZ29fYWNjZXNzX3Rva2VuKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMudXJsICsgZW5kcG9pbnQsIHsgaGVhZGVycyB9KS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuICB9XG5cbiAgZ2V0TWUoZGphbmdvX2FjY2Vzc190b2tlbjogc3RyaW5nKSB7XG4gICAgdmFyIGVuZHBvaW50ID0gJ2FwaS9tZS8nO1xuICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblxuICAgIGhlYWRlcnMuYXBwZW5kKCdBdXRob3JpemF0aW9uJywgJ0JlYXJlciAnICsgZGphbmdvX2FjY2Vzc190b2tlbik7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnVybCArIGVuZHBvaW50LCB7IGhlYWRlcnMgfSkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcbiAgfVxuXG4gIGdldFByb2ZpbGUoZGphbmdvX2FjY2Vzc190b2tlbjogc3RyaW5nLCBwbGF5ZXJfaWQ6IG51bWJlcikge1xuICAgIHZhciBlbmRwb2ludCA9ICdhcGkvcHJvZmlsZXMvJyArIHBsYXllcl9pZCArICcvJztcbiAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG5cbiAgICBoZWFkZXJzLmFwcGVuZCgnQXV0aG9yaXphdGlvbicsICdCZWFyZXIgJyArIGRqYW5nb19hY2Nlc3NfdG9rZW4pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy51cmwgKyBlbmRwb2ludCwgeyBoZWFkZXJzIH0pLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG4gIH1cblxuICBwbGF5Q2hhbGxlbmdlKGRqYW5nb19hY2Nlc3NfdG9rZW46IHN0cmluZywgcGxheWVyX2lkOiBudW1iZXIsIGNoYWxsZW5nZV9pZDogbnVtYmVyKSB7XG5cbiAgICB2YXIgZW5kcG9pbnQgPSAnYXBpL3Byb2ZpbGVzLycgKyBwbGF5ZXJfaWQgKyAnL2NoYWxsZW5nZS8nO1xuXG4gICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIGhlYWRlcnMuYXBwZW5kKCdBdXRob3JpemF0aW9uJywgJ0JlYXJlciAnICsgZGphbmdvX2FjY2Vzc190b2tlbik7XG4gICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cbiAgICBsZXQgYm9keVN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgJ2NoYWxsZW5nZScgOiBjaGFsbGVuZ2VfaWRcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLnVybCArIGVuZHBvaW50LCBib2R5U3RyaW5nLCB7IGhlYWRlcnMgfSkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcblxuICB9XG5cbn1cbiJdfQ==
