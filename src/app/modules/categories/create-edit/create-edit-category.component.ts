import { Component, OnInit, Inject } from '@angular/core';

import { CategoriesService } from 'app/services/categories.service';
import { NotificationService } from 'app/services/notification.service';
import { ManageException } from 'app/utils/exceptions/manage-exceptions';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import * as selectn from 'selectn';

@Component({
    selector: 'app-create-edit-category',
    templateUrl: './create-edit-category.component.html',
    styleUrls: ['./create-edit-category.component.scss']
})
export class CreateEditCategoryModalComponent implements OnInit {

    public category: any = {};
    public readonly DEFAULT_MIN_CHARS: number = 5;

    constructor(
        private categoriesService: CategoriesService,
        private notificationService: NotificationService,
        public dialogRef: MatDialogRef<CreateEditCategoryModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any = {},
    ) { }

    ngOnInit() {
        this.category = this.data.category || {};
    }

    process() {
        let result: any;

        if (this.isEdit) {
            result = this.categoriesService.update(this.category);
        } else {
            result = this.categoriesService.add(this.category);
        }

        result.subscribe(({ data }) => {
            this.notificationService.success(data);
            this.dialogRef.close(true);
        }, err => {
            this.notificationService.error(ManageException.handle(err));
        });
    }

    get isEdit() {
        return this.data.action === 'edit';
    }

    get isValidData() {
        return !!selectn('description', this.category)
            && this.category.description.length >= this.DEFAULT_MIN_CHARS;
    }

}
