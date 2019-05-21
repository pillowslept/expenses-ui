import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'app/services/categories.service';
import { ACTIVE, INACTIVE } from 'app/utils/constants/categories';

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
        private categoriesService: CategoriesService
    ) { }

    ngOnInit() {
        this.loadCategories();
    }

    private loadCategories() {
        this.categoriesService.get()
            .subscribe(data => this.categories = data);
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
