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
var initDemo = require("../../../assets/js/charts.js");
var ParserComponent = (function () {
    function ParserComponent() {
    }
    ParserComponent.prototype.onMessage = function (e) {
        var data = e.data;
        var origin = e.origin;
        /**
         * �������� ������ ������ ������
         */
        console.log(origin);
        if (origin !== "http://localhost:5000") {
            console.log('������ ������ � ������� ������ origin =' + origin);
            return;
        }
        var str = '������ �������� ������';
        if (data.title && data.value) {
            str = '���������1:' + data.title + '. �������� �������:' + data.value;
        }
        console.log(str);
    };
    ;
    ParserComponent.prototype.ngOnInit = function () {
        // $('[data-toggle="checkbox"]').each(function () {
        //     if($(this).data('toggle') == 'switch') return;
        //
        //     var $checkbox = $(this);
        //     $checkbox.checkbox();
        // });
        initDemo();
    };
    ParserComponent.prototype.allertM = function () {
        var sendObject = {
            title: '�������� ���������',
            value: 5000
        };
        console.log(document.location.toString());
        var iframe = document.getElementsByTagName('iframe')[0];
        iframe.contentWindow.postMessage(sendObject, '*');
    };
    return ParserComponent;
}());
__decorate([
    core_1.HostListener('window:message', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ParserComponent.prototype, "onMessage", null);
ParserComponent = __decorate([
    core_1.Component({
        selector: 'parser-cmp',
        moduleId: module.id,
        templateUrl: 'parser.component.html'
    })
], ParserComponent);
exports.ParserComponent = ParserComponent;
//# sourceMappingURL=parser.component.js.map