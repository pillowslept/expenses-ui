import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import * as selectn from 'selectn';

@Component({
    selector: 'app-menu-item',
    templateUrl: './menu-item.component.html',
    styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {

    @Input() option: any = {};
    @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();
    public isOpen = false;

    constructor(
        private readonly router: Router,
    ) { }

    navigate({ route }): void {
        this.close.emit();
        this.router.navigateByUrl(route);
        this.isOpen = false;
    }

    triggerAction(): void {
        if (this.hasOptions) {
            this.isOpen = !this.isOpen;
        } else {
            this.navigate(this.option);
        }
    }

    get hasOptions(): boolean {
        return !!selectn('options.length', this.option);
    }

}
