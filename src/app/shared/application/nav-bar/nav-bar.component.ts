import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

    @Input() readonly menuOptions = [];
    @Output() openMenu = new EventEmitter<void>();

    constructor(
        private readonly router: Router,
    ) { }

    openSidenav(): void {
        this.openMenu.emit();
    }

    navigate({ route }): void {
        this.router.navigateByUrl(route);
    }

}
