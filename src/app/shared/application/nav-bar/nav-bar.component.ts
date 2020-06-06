import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

    @Output() openMenu = new EventEmitter<void>();

    openSidenav(): void {
        this.openMenu.emit();
    }

}
