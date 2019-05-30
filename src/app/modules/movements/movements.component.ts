import { Component, OnInit } from '@angular/core';
import { MovementsService } from 'app/services/movements.service';
import { FiltersService } from 'app/services/filters.service';
import { Movement } from 'app/entities/movement';
import { NotificationService } from 'app/services/notification.service';
import { ManageException } from 'app/utils/exceptions/manage-exceptions';

@Component({
    selector: 'app-movements',
    templateUrl: './movements.component.html',
    styleUrls: ['./movements.component.scss']
})
export class MovementsComponent implements OnInit {

    private readonly ALL_OPTION = 0;
    public movements: Movement[] = [];
    public months = [];
    public monthsFilter = this.ALL_OPTION;
    public yearFilter = this.ALL_OPTION;
    public years = [{ id: 2019, description: '2019'}];
    public pageNumber = 0;
    public pageSize = 10;

    constructor(
        private movementsService: MovementsService,
        private filtersService: FiltersService,
        private notificationService: NotificationService
    ) { }

    ngOnInit() {
        this.searchMovements();
        this.searchFilters();
    }

    private searchMovements() {
        this.movementsService.get(this.pageNumber, this.pageSize).subscribe(({ data }) => {
            this.movements = data;
        }, err => {
            this.notificationService.error(ManageException.handle(err));
        });
    }

    private searchFilters() {
        this.filtersService.get().subscribe(({ data }) => {
            this.months = data;
        }, err => {
            this.notificationService.error(ManageException.handle(err));
        });
    }

    filterMovements() {
        this.resetFilters();
        if (!this.isValidMonth) {
            this.yearFilter = this.ALL_OPTION;
            this.searchMovements();
        } else {
            if (this.isValidYear) {
                this.movementsService.getByMonthAndYear(
                    this.monthsFilter, this.yearFilter, this.pageNumber, this.pageSize).subscribe(({ data }) => {
                    this.movements = data;
                }, err => {
                    this.notificationService.error(ManageException.handle(err));
                });
            }
        }
    }

    private resetFilters() {
        this.pageNumber = 1;
        this.pageSize = 10;
    }

    get isValidMonth() {
        return this.monthsFilter !== this.ALL_OPTION;
    }

    get isValidYear() {
        return this.yearFilter !== this.ALL_OPTION;
    }

}
