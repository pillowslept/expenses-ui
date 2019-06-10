import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MovementsService } from 'app/services/movements.service';
import { CategoriesService } from 'app/services/categories.service';
import { TypesService } from 'app/services/types.service';
import { NotificationService } from 'app/services/notification.service';
import { ManageException } from 'app/utils/exceptions/manage-exceptions';
import * as moment from 'moment';

@Component({
    selector: 'app-movements-form',
    templateUrl: './movements-form.component.html',
    styleUrls: ['./movements-form.component.scss']
})
export class MovementsFormComponent implements OnInit {

    public isEdit: boolean = false;
    public movement: any = {};
    public categories = [];
    public types = [];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private movementsService: MovementsService,
        private categoriesService: CategoriesService,
        private typesService: TypesService,
        private notificationService: NotificationService
    ) {
    }

    ngOnInit() {
        this.route.params.subscribe(({ id }) => {
            this.validateRouteParams(id);
        });
        this.getCategories();
        this.getTypes();
    }

    private validateRouteParams(id) {
        this.isEdit = !!id;

        if (!id) {
            return;
        }

        this.movementsService.getById(id).subscribe(({ data }) => {
            this.movement = data;
            this.movement.hour = moment(this.movement.creationDate).format('HH:MM');
            this.movement.date = new Date(this.movement.creationDate);
        }, err => {
            this.notificationService.error(ManageException.handle(err));
        });
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

    validateFields() {

        if (!this.movement.categoryId) {
            return;
        }
        if (!this.movement.typeId) {
            return;
        }
        if (!this.movement.value) {
            return;
        }
        if (!this.movement.date) {
            return;
        }
        if (!this.movement.hour) {
            return;
        }
        if (!this.movement.observations) {
            return;
        }

        return this.save();
    }

    private save() {
        let result;

        this.homologateDate();

        if (this.movement.id) {
            result = this.movementsService.update(this.movement);
        } else {
            result = this.movementsService.add(this.movement);
        }

        result.subscribe(({ message }) => {
            this.notificationService.success(message);
            this.goBack();
        }, err => {
            this.notificationService.error(ManageException.handle(err));
        });
    }

    private homologateDate() {
        const time = this.movement.hour.split(':');
        const creationDate = moment(this.movement.date);
        creationDate.set({ h: time[0], m: time[1]});
        this.movement.creationDate = creationDate.format('DD-MM-YYYY HH:mm');
    }

    goBack() {
        this.router.navigate(['movements']);
    }

}
