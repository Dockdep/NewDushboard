import { Component, OnInit } from '@angular/core';

import { FeedService } from '../shared/services/feed.service';
import { SignalRConnectionStatus } from '../shared/interfaces';

@Component({

    //ngOnInit() {
    //    this.service.start(true).subscribe(
    //        null,
    //        error => console.log('Error on init: ' + error));
    //}