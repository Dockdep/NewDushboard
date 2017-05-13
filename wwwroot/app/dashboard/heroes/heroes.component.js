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
var feed_service_1 = require("../../shared/services/feed.service");
var data_service_1 = require("../../shared/services/data.service");
var HeroesComponent = (function () {
    function HeroesComponent(dataService, feedService) {
        this.dataService = dataService;
        this.feedService = feedService;
    }
    HeroesComponent.prototype.ngOnInit = function () {
        var self = this;
        self.loadMatches();
    };
    HeroesComponent.prototype.loadMatches = function () {
        var self = this;
        this.dataService.getMatches()
            .subscribe(function (res) {
            self.matches = res;
            // Listen for match score updates...
            self.feedService.updateMatch.subscribe(function (match) {
                for (var i = 0; i < self.matches.length; i++) {
                    if (self.matches[i].Id === match.Id) {
                        self.matches[i].HostScore = match.HostScore;
                        self.matches[i].GuestScore = match.GuestScore;
                        if (match.HostScore === 0 && match.GuestScore === 0)
                            self.matches[i].Feeds = new Array();
                    }
                }
            });
            // Listen for subscribed feed updates..
            self.feedService.addFeed.subscribe(function (feed) {
                console.log(feed);
                for (var i = 0; i < self.matches.length; i++) {
                    if (self.matches[i].Id === feed.MatchId) {
                        if (!self.matches[i].Feeds) {
                            self.matches[i].Feeds = new Array();
                        }
                        self.matches[i].Feeds.unshift(feed);
                    }
                }
            });
        }, function (error) {
            console.log(error);
        });
    };
    HeroesComponent.prototype.listenForConnection = function () {
        var self = this;
        // Listen for connected / disconnected events
        self.feedService.setConnectionId.subscribe(function (id) {
            console.log(id);
            self.connectionId = id;
        });
    };
    HeroesComponent.prototype.updateSubscription = function (subscription) {
        if (subscription.subscribe === true)
            this.feedService.subscribeToFeed(subscription.matchId);
        else
            this.feedService.unsubscribeFromFeed(subscription.matchId);
    };
    return HeroesComponent;
}());
HeroesComponent = __decorate([
    core_1.Component({
        selector: 'heroes-cmp',
        moduleId: module.id,
        templateUrl: 'heroes.component.html'
    }),
    __metadata("design:paramtypes", [data_service_1.DataService,
        feed_service_1.FeedService])
], HeroesComponent);
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map