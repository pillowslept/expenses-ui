import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { FlexModule } from '@angular/flex-layout';
import { NotificationService } from 'app/services/notification.service';
import { MaterialModule } from './material.module';
import { ConfirmActionDialogComponent } from './dialogs/confirm-action/confirm-action.component';
import { CustomDatePipe } from './pipes/custom-date.pipe';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule,
        MaterialModule,
        FlexModule,
    ],
    declarations: [
        NavBarComponent,
        SidenavComponent,
        MenuItemComponent,
        ConfirmActionDialogComponent,
        CustomDatePipe,
    ],
    exports: [
        NavBarComponent,
        SidenavComponent,
        TranslateModule,
        MaterialModule,
        FlexModule,
        ConfirmActionDialogComponent,
        CustomDatePipe,
    ],
    providers: [
        NotificationService,
    ]
})
export class ApplicationModule { }
