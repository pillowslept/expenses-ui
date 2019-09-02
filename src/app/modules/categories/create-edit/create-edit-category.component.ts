import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CategoriesService } from 'app/services/categories.service';
import { NotificationService } from 'app/services/notification.service';
import { ManageException } from 'app/utils/exceptions/manage-exceptions';

@Component({
    selector: 'app-create-edit-category',
    templateUrl: './create-edit-category.component.html',
    styleUrls: ['./create-edit-category.component.scss']
})
export class CreateEditCategoryComponent implements OnInit {

    public isEdit: boolean = false;
    public category: any = {};

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private categoriesService: CategoriesService,
        private notificationService: NotificationService
    ) {
    }

    ngOnInit() {
        this.route.params.subscribe(({ id }) => {
            this.validateRouteParams(id);
        });
    }

    private validateRouteParams(id: number) {
        this.isEdit = !!id;

        if (!id) {
            return;
        }

        this.categoriesService.byId(id).subscribe(({ data }) => {
            this.category = data;
        }, err => {
            this.notificationService.error(ManageException.handle(err));
        });
    }

    process() {
        let result;

        if (this.category.id) {
            result = this.categoriesService.update(this.category);
        } else {
            result = this.categoriesService.add(this.category);
        }

        result.subscribe(({ message }) => {
            this.notificationService.success(message);
            this.goBack();
        }, err => {
            this.notificationService.error(ManageException.handle(err));
        });
    }

    goBack() {
        this.router.navigate(['categories']);
    }

    get isValidData() {
        return !!this.category && !!this.category.description;
    }

}
