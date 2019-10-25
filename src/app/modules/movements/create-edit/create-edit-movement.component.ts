import { Component, OnInit, Inject } from '@angular/core';

import { CategoriesService } from 'app/services/categories.service';
import { NotificationService } from 'app/services/notification.service';
import { ManageException } from 'app/utils/exceptions/manage-exceptions';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import * as selectn from 'selectn';
import { TypesService } from 'app/services/types.service';
import { MovementsService } from 'app/services/movements.service';
import * as moment from 'moment';

@Component({
    selector: 'app-create-edit-movement',
    templateUrl: './create-edit-movement.component.html',
    styleUrls: ['./create-edit-movement.component.scss']
})
export class CreateEditMovementDialogComponent implements OnInit {

    public movement: any = {};
    public readonly OBS_MAX: number = 500;
    public categories: Array<any> = [];
    public types: Array<any> = [];

    constructor(
        private categoriesService: CategoriesService,
        private typesService: TypesService,
        private movementsService: MovementsService,
        private notificationService: NotificationService,
        public dialogRef: MatDialogRef<CreateEditMovementDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any = {},
    ) { }

    ngOnInit() {
        this.mapInitialData();
        this.getCategories();
        this.getTypes();
    }

    private mapInitialData() {
        this.movement = this.data.movement || {};
        if (this.movement.id) {
            this.movement.hour = moment(this.movement.creationDate).format('HH:MM');
            this.movement.date = new Date(this.movement.creationDate);
        }
    }

    private getTypes() {
        this.typesService.get().subscribe(({ data }) => {
            this.types = data;
        }, err => {
            this.notificationService.error(ManageException.handle(err));
        });
    }

    private getCategories() {
        this.categoriesService.get().subscribe(({ data }) => {
            this.categories = data;
        }, err => {
            this.notificationService.error(ManageException.handle(err));
        });
    }

    process() {
        if (this.isValidData) {
            this.save();
        }
    }

    private save() {
        let result: any;

        this.homologateDate();

        if (this.isEdit) {
            result = this.movementsService.update(this.movement);
        } else {
            result = this.movementsService.add(this.movement);
        }

        result.subscribe(({ message }) => {
            this.notificationService.success(message);
            this.dialogRef.close(true);
        }, err => {
            this.notificationService.error(ManageException.handle(err));
        });
    }

    private homologateDate() {
        const time = this.movement.hour.split(':');
        const creationDate = moment(this.movement.date);
        creationDate.set({ h: time[0], m: time[1]});
        this.movement.date = creationDate.format('DD-MM-YYYY HH:mm');
    }

    get isEdit() {
        return this.data.action === 'edit';
    }

    get isValidData() {
        return !!selectn('categoryId', this.movement) && !!selectn('typeId', this.movement)
            && !!selectn('value', this.movement) && !!selectn('date', this.movement)
            && !!selectn('hour', this.movement) && !!selectn('observations', this.movement);
    }

}
