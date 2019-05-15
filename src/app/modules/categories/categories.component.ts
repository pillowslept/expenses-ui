import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

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
            .subscribe(response => this.loadCategories());
    }

    activate(categoryId) {
        this.categoriesService.activate(categoryId)
            .subscribe(response => this.loadCategories());
    }

}
