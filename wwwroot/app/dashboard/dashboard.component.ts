import { Component, OnInit } from '@angular/core';

import { FeedService } from '../shared/services/feed.service';
import { SignalRConnectionStatus } from '../shared/interfaces';

@Component({    selector: 'dashboard-cmp',    moduleId: module.id,    templateUrl: 'dashboard.component.html',    providers: [FeedService]})export class DashboardComponent {    constructor(private service: FeedService) { }

    //ngOnInit() {
    //    this.service.start(true).subscribe(
    //        null,
    //        error => console.log('Error on init: ' + error));
    //}}
