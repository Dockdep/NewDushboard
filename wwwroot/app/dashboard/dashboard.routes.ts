import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { HeroesComponent } from './heroes/heroes.component';
import { UserComponent } from './user/user.component';
import { IconsComponent } from './icons/icons.component';
import { TableComponent } from './table/table.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TypographyComponent } from './typography/typography.component';
import { MapsComponent } from './maps/maps.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { ParserComponent } from './parser/parser.component';

export const MODULE_ROUTES: Route[] =[
    { path: 'dashboard', component: HomeComponent },
    { path: 'parser', component: ParserComponent },
    { path: 'user', component: UserComponent },
    {path: 'heroes', component: HeroesComponent },
    { path: 'table', component: TableComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'upgrade', component: UpgradeComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
]

export const MODULE_COMPONENTS = [
    HomeComponent,
    ParserComponent,
    UserComponent,
    TableComponent,
    IconsComponent,
    NotificationsComponent,
    TypographyComponent,
    MapsComponent,
    UpgradeComponent,
    HeroesComponent
]
