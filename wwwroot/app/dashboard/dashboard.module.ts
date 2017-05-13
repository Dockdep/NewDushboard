import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './dashboard.routes';

import { ConfigService } from '../shared/services/config.service';
import { DataService } from '../shared/services/data.service';
import { MatchComponent } from '../shared/components/match.component';
import { ChatComponent } from '../shared/components/chat.component';

@NgModule({
    imports: [
        RouterModule.forChild(MODULE_ROUTES),
        FormsModule,
        BrowserModule,
        HttpModule
    ],
    declarations: [
        MODULE_COMPONENTS,
        MatchComponent,
        ChatComponent
    ],
    providers: [
        ConfigService,
        DataService
    ]
})

export class DashboardModule{}
