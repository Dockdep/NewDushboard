﻿class XpathWorker {
    createXPathFromElement(elm): string {
        var allNodes = document.getElementsByTagName('*');
        for (var segs = []; elm && elm.nodeType == 1; elm = elm.parentNode) {
            if (elm.hasAttribute('id')) {
                var uniqueIdCount = 0;
                for (var n = 0; n < allNodes.length; n++) {
                    if (allNodes[n].hasAttribute('id') && allNodes[n].id == elm.id) uniqueIdCount++;
                    if (uniqueIdCount > 1) break;
                };
                if (uniqueIdCount == 1) {
                    segs.unshift('//*[@id="' + elm.getAttribute('id') + '"]');
                    return segs.join('/');
                } else {
                    segs.unshift(elm.localName.toLowerCase() + '[@id="' + elm.getAttribute('id') + '"]');
                }
            } else {
                for (var i = 1, sib = elm.previousSibling; sib; sib = sib.previousSibling) {
                    if (sib.localName == elm.localName) i++;
                };
                segs.unshift(elm.localName.toLowerCase() + '[' + i + ']');
            };
        };
        return segs.length ? '/' + segs.join('/') : null;
    };

    lookupElementByXPath(path: string):any {
        var evaluator = new XPathEvaluator();
        var result = evaluator.evaluate(path, document.documentElement, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        return result.singleNodeValue;
    }

}

class DataSender {
    private xhr: XMLHttpRequest;
    private body: string;
    constructor() {
        this.xhr = new XMLHttpRequest();
    }
    public Add() {
        this.body = 'Xpath=' + encodeURIComponent("Xpath") +
            '&Data=' + encodeURIComponent("Data");
    }
    public Send() {
        this.xhr.open("POST", '/SiteData/Create', true)
        this.xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        this.xhr.send(this.body);
    }
   
}

var LastElement = null;
var LastSelectedElement = null;
window.addEventListener("mouseover", function (event) {
    var xPathWorker = new XpathWorker();
    var target = xPathWorker.createXPathFromElement(event.target || event.srcElement);
    console.log(target);
    var element = xPathWorker.lookupElementByXPath(target);
    if (LastElement) {
        LastElement.classList.remove("hovered");
        element.classList.add("hovered");
        LastElement = element;
    } else {
        element.classList.add("hovered");
        LastElement = element;
    }

});

window.addEventListener("click", function (event) {

    event.preventDefault();
    event.stopPropagation();
    let sender = new DataSender();
    var element: any = event.target || event.srcElement;
    if (LastSelectedElement) {
        LastSelectedElement.classList.remove("selected");
        element.classList.add("selected");
        LastSelectedElement = element;
        sender.Add();
        sender.Send();
    } else {
        element.classList.add("selected");
        LastSelectedElement = element;
        sender.Add();
        sender.Send();
    }

});
let onMessage = function (e) {
    var data = e.data;
    var origin = e.origin;

    /**
     * Проверка октуда пришел запрос
     */
    console.log(origin);
    if (origin !== "http://localhost:5000") {
        console.log('Запрос пришел с другого домена');
        return;
    }

    var str = 'Пришли неверные данные';

    if (data.title && data.value) {
        str = 'Сообщение:' + data.title + '. Значение объекта:' + data.value;
    }

    console.log(str);

    let parent = window.parent;
    var sendObject = {
        title: 'Тестовое сообщение',
        value: 50001
    };
    parent.postMessage(sendObject,'*');
};

if (typeof window.addEventListener != 'undefined') {
    window.addEventListener('message', onMessage, false);
}