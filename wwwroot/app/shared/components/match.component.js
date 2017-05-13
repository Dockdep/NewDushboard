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
var data_service_1 = require("../services/data.service");
var MatchComponent = (function () {
    function MatchComponent(dataService) {
        this.dataService = dataService;
        this.updateSubscription = new core_1.EventEmitter();
        this.chatMessage = '';
    }
    MatchComponent.prototype.ngOnInit = function () { };
    MatchComponent.prototype.setSubscription = function (val) {
        this.subscribed = val;
        var subscription = {
            subscribe: val,
            matchId: this.match.Id
        };
        this.updateSubscription.emit(subscription);
    };
    MatchComponent.prototype.addChatMessage = function () {
        var self = this;
        var messageToSend = {
            MatchId: self.match.Id,
            Text: self.chatMessage,
            CreatedAt: new Date(Date.now())
        };
        this.dataService.addChatMessage(messageToSend)
            .subscribe(function () {
            // Nothing to do here
            // Since is subscribed, caller will also receive the message
            console.log('message sent..');
        }, function (error) {
            console.log(error);
        });
        self.chatMessage = '';
    };
    return MatchComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], MatchComponent.prototype, "match", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], MatchComponent.prototype, "updateSubscription", void 0);
MatchComponent = __decorate([
    core_1.Component({
        selector: 'match',
        templateUrl: 'app/shared/components/match.component.html'
    }),
    __metadata("design:paramtypes", [data_service_1.DataService])
], MatchComponent);
exports.MatchComponent = MatchComponent;
//# sourceMappingURL=match.component.js.map