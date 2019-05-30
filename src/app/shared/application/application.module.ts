import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NotificationService } from 'app/services/notification.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule,
        MatSelectModule,
        MatSidenavModule,
        MatToolbarModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule
    ],
    declarations: [
        NavBarComponent,
        SidenavComponent,
    ],
    exports: [
        NavBarComponent,
        SidenavComponent,
        TranslateModule,
        MatSelectModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule
    ],
    providers: [
        NotificationService
    ]
})
export class ApplicationModule { }
