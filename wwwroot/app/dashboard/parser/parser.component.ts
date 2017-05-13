import { HostListener, Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import initDemo = require('../../../assets/js/charts.js');

declare var $:any;

@Component({
    selector: 'parser-cmp',
    moduleId: module.id,
    templateUrl: 'parser.component.html'
})

export class ParserComponent implements OnInit{
    @HostListener('window:message', ['$event'])
    onMessage(e) {
        var data = e.data;
        var origin = e.origin;

        /**
         * Проверка октуда пришел запрос
         */
        console.log(origin);
        if (origin !== "http://localhost:5000") {
            console.log('Запрос пришел с другого домена origin =' + origin);
            return;
        }


        var str = 'Пришли неверные данные';

        if (data.title && data.value) {
            str = 'Сообщение1:' + data.title + '. Значение объекта:' + data.value;
        }

        console.log(str);

    };

    ngOnInit(){
        // $('[data-toggle="checkbox"]').each(function () {
        //     if($(this).data('toggle') == 'switch') return;
        //
        //     var $checkbox = $(this);
        //     $checkbox.checkbox();
        // });
        initDemo();
    }

  
    
    allertM() {
        var sendObject = {
            title: 'Тестовое сообщение',
            value: 5000
        };
        console.log(document.location.toString());
        var iframe = document.getElementsByTagName('iframe')[0];
        iframe.contentWindow.postMessage(sendObject, '*');
    }
}
