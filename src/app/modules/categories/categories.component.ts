import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'app/services/categories.service';
import { ACTIVE, INACTIVE } from 'app/utils/constants/categories';
import { NotificationService } from 'app/services/notification.service';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

    public readonly ACTIVE = ACTIVE;
    public readonly INACTIVE = INACTIVE;
    public categories: any = [];

    constructor(
        private categoriesService: CategoriesService,
        private notificationService: NotificationService
    ) { }

    ngOnInit() {
        this.loadCategories();
    }

    private loadCategories() {
        this.categoriesService.get().subscribe(data => {
            this.categories = data;
        }, err => {
            this.notificationService.error('Error consultando el MS', 'Error');
        });
    }

    inactivate(categoryId) {
        this.categoriesService.inactivate(categoryId)
            .subscribe(() => this.loadCategories());
    }

    activate(categoryId) {
        this.categoriesService.activate(categoryId)
            .subscribe(() => this.loadCategories());
    }

}
