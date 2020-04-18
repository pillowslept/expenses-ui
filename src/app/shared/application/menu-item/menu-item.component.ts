import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-menu-item',
    templateUrl: './menu-item.component.html',
    styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {

    @Input() option: any = {};
    @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(
        private router: Router,
    ) { }

    navigate(): void {
        this.close.emit();
        this.router.navigateByUrl(this.option.route);
    }

}
