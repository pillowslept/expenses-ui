import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatSelectModule } from '@angular/material/select';
import { NotificationService } from 'app/services/notification.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule,
        MatSelectModule
    ],
    declarations: [
        NavBarComponent,
    ],
    exports: [
        NavBarComponent,
        TranslateModule,
        MatSelectModule
    ],
    providers: [
        NotificationService
    ]
})
export class ApplicationModule { }
