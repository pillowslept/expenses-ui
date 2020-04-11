import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MENU_OPTIONS } from 'app/utils/constants/sidenav';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

    @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;

    public readonly MENU_OPTIONS: Array<any> = MENU_OPTIONS;

    close(): void {
        this.sidenav.close();
    }

    open(): void {
        this.sidenav.open();
    }

}
