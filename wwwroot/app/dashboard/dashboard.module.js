"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var dashboard_routes_1 = require("./dashboard.routes");
var config_service_1 = require("../shared/services/config.service");
var data_service_1 = require("../shared/services/data.service");
var match_component_1 = require("../shared/components/match.component");
var chat_component_1 = require("../shared/components/chat.component");
var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(dashboard_routes_1.MODULE_ROUTES),
            forms_1.FormsModule,
            platform_browser_1.BrowserModule,
            http_1.HttpModule
        ],
        declarations: [
            dashboard_routes_1.MODULE_COMPONENTS,
            match_component_1.MatchComponent,
            chat_component_1.ChatComponent
        ],
        providers: [
            config_service_1.ConfigService,
            data_service_1.DataService
        ]
    })
], DashboardModule);
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map