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
            title: '�������� ���������',
            value: 5000
        };
        console.log(document.location.toString());
        var iframe = document.getElementsByTagName('iframe')[0];
        iframe.contentWindow.postMessage(sendObject, '*');
    }
}
