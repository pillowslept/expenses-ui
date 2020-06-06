import { Category } from 'app/entities/category';
import { Component, OnInit, Inject } from '@angular/core';
import { CategoriesService } from 'app/services/categories.service';
import { NotificationService } from 'app/services/notification.service';
import { ManageException } from 'app/utils/exceptions/manage-exceptions';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as selectn from 'selectn';
import { TypesService } from 'app/services/types.service';
import { MovementsService } from 'app/services/movements.service';
import * as moment from 'moment';
import { DEFAULT_FORMAT, HOUR_MINUTES } from 'app/utils/constants/dates';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-create-edit-movement',
    templateUrl: './create-edit-movement.component.html',
    styleUrls: ['./create-edit-movement.component.scss']
})
export class CreateEditMovementDialogComponent implements OnInit {

    public movement: any;
    private action: string;
    public readonly OBS_MAX: number = 500;
    public categories: Category[];
    public types: Array<any> = [];

    constructor(
        private readonly categoriesService: CategoriesService,
        private readonly typesService: TypesService,
        private readonly movementsService: MovementsService,
        private readonly notificationService: NotificationService,
        private readonly translateService: TranslateService,
        private readonly dialogRef: MatDialogRef<CreateEditMovementDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private data: any = {},
    ) { }

    ngOnInit(): void {
        this.movement = this.data.movement;
        this.action = this.data.action;
        this.mapInitialData();
        this.getCategories();
        this.getTypes();
    }

    private mapInitialData(): void {
        if (this.movement.id) {
            this.movement.date = new Date(this.movement.creationDate);
            this.movement.hour = moment(this.movement.date).format(HOUR_MINUTES);
            this.movement.categoryId = selectn('category.id', this.movement) || '';
            this.movement.typeId = selectn('type.id', this.movement) || '';
        }
    }

    private getTypes(): void {
        this.typesService.get().subscribe(({ data }) => {
            this.types = data;
        }, err => {
            this.notificationService.error(ManageException.handle(err));
        });
    }

    private getCategories(): void {
        this.categoriesService.get().subscribe(({ data }) => {
            this.categories = data;
        }, err => {
            this.notificationService.error(ManageException.handle(err));
        });
    }

    process(): void {
        if (this.isValidData) {
            this.save();
        }
    }

    private save(): void {
        let result: Observable<void>;

        const movement = this.homologateDate();

        if (this.isEdit) {
            result = this.movementsService.update(movement);
        } else {
            result = this.movementsService.add(movement);
        }

        result.subscribe(() => {
            this.notificationService.success(this.translateService.instant('MESSAGES.ACTION_SUCCESS'));
            this.dialogRef.close(true);
        }, err => {
            this.notificationService.error(ManageException.handle(err));
        });
    }

    private homologateDate() {
        const movement = { ...this.movement };
        const time = movement.hour.split(':');
        const creationDate = moment(movement.date);
        creationDate.set({ h: time[0], m: time[1] });
        movement.date = creationDate.format(DEFAULT_FORMAT);

        return movement;
    }

    get isEdit(): boolean {
        return this.action === 'edit';
    }

    get isValidData(): boolean {
        return !!selectn('categoryId', this.movement) && !!selectn('typeId', this.movement)
            && !!selectn('value', this.movement) && !!selectn('date', this.movement)
            && !!selectn('hour', this.movement) && !!selectn('observations', this.movement);
    }

}
