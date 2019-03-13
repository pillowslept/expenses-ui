import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'app/services/categories.service';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

    public categories: any = [];

    constructor(
        private categoriesService: CategoriesService
    ) { }

    ngOnInit() {
        this.categoriesService.get()
            .subscribe(data => this.categories = data);
    }

}
