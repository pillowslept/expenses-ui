import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FlexModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
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
    ],
    entryComponents: [ConfirmActionDialogComponent]
})
export class ApplicationModule { }
