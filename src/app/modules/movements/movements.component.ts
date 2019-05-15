import { Component, OnInit } from '@angular/core';
import { MovementsService } from './shared/movements.service';
import { FiltersService } from 'src/app/services/filters.service';
import { Movement } from './shared/movement';

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
        private filtersService: FiltersService
    ) { }

    ngOnInit() {
        this.movementsService.get(this.pageNumber, this.pageSize)
            .subscribe(data => this.movements = data);

        this.filtersService.get()
            .subscribe(data => this.months = data);
    }

}
