import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

    @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;

    constructor() { }

    close() {
        this.sidenav.close();
    }

    open() {
        this.sidenav.open();
    }

}
