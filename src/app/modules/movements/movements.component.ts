import { Component, OnInit } from '@angular/core';
import { MovementsService } from 'app/services/movements.service';
import { FiltersService } from 'app/services/filters.service';
import { Movement } from 'app/entities/movement';
import { NotificationService } from 'app/services/notification.service';

@Component({
    selector: 'app-movements',
    templateUrl: './movements.component.html',
    styleUrls: ['./movements.component.scss']
})
export class MovementsComponent implements OnInit {

    public movements: Movement[] = [];
    public months = [];
    public monthsFilter = 1;
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
        this.movementsService.get(this.pageNumber, this.pageSize).subscribe(data => {
            this.movements = data;
        }, err => {
            this.notificationService.error('Error consultando el MS', 'Error');
        });
    }

    private searchFilters() {
        this.filtersService.get().subscribe(data => {
            this.months = data;
        }, err => {
            this.notificationService.error('Error consultando el MS', 'Error');
        });
    }

}
