import { Component, OnInit, ViewChild } from '@angular/core';
import { MovementsService } from 'app/services/movements.service';
import { FiltersService } from 'app/services/filters.service';
import { Movement } from 'app/entities/movement';
import { NotificationService } from 'app/services/notification.service';
import { ManageException } from 'app/utils/exceptions/manage-exceptions';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MOVEMENTS_COLUMNS } from 'app/utils/constants/movements';
import { PAGE_SIZE_OPTIONS, PAGE_SIZE, INITIAL_PAGE } from 'app/utils/constants/tables';
import { CreateEditMovementDialogComponent } from '../create-edit/create-edit-movement.component';
import { DialogService } from 'app/services/dialog.service';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-movements',
    templateUrl: './movements.component.html',
    styleUrls: ['./movements.component.scss']
})
export class MovementsComponent implements OnInit {

    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

    private readonly ALL_OPTION = 0;
    public displayedColumns: string[] = MOVEMENTS_COLUMNS;
    public movements: MatTableDataSource<Movement>;
    public months: Array<any> = [];
    public monthsFilter: number;
    public yearFilter: number;
    public years: Array<any> = [];
    public pageNumber: number = INITIAL_PAGE;
    public pageSize: number = PAGE_SIZE;
    public readonly PAGE_SIZE_OPTIONS: Array<number> = PAGE_SIZE_OPTIONS;

    constructor(
        private readonly movementsService: MovementsService,
        private readonly filtersService: FiltersService,
        private readonly notificationService: NotificationService,
        private readonly dialogService: DialogService,
    ) { }

    ngOnInit(): void {
        this.searchFilters();
    }

    private searchFilters(): void {
        this.filtersService.getMonths().subscribe(({ data }) => {
            this.months = data;
            this.monthsFilter = new Date().getMonth() + 1;
            this.filterByMonthAndYear();
        }, err => {
            this.notificationService.error(ManageException.handle(err));
        });
        this.years = this.filtersService.getYears();
        this.yearFilter = this.years[0].id;
    }

    private searchMovements(): void {
        this.movementsService.get(this.pageNumber, this.pageSize).subscribe(({ data }) => {
            this.movements = new MatTableDataSource(data);
            this.movements.sort = this.sort;
            this.movements.paginator = this.paginator;
        }, err => {
            this.notificationService.error(ManageException.handle(err));
        });
    }

    filterMovements(): void {
        this.resetFilters();
        if (this.isValidMonth && this.isValidYear) {
            this.filterByMonthAndYear();
        } else if (!this.isValidMonth && !this.isValidYear) {
            this.searchMovements();
        }
    }

    private filterByMonthAndYear(): void {
        this.movementsService.getByMonthAndYear(
            this.monthsFilter, this.yearFilter, this.pageNumber, this.pageSize).subscribe(({ data }) => {
            this.movements = new MatTableDataSource(data);
            this.movements.sort = this.sort;
            this.movements.paginator = this.paginator;
        }, err => {
            this.notificationService.error(ManageException.handle(err));
        });
    }

    private resetFilters(): void {
        this.pageNumber = 0;
        this.pageSize = 10;
    }

    get isValidMonth(): boolean {
        return this.monthsFilter !== this.ALL_OPTION;
    }

    get isValidYear(): boolean {
        return this.yearFilter !== this.ALL_OPTION;
    }

    applyFilter(filterValue: string): void {
        this.movements.filter = filterValue.trim().toLowerCase();
    }

    openCreateEditDialog(action: string, movement = {}): void {
        const dialogRef = this.dialogService.open(CreateEditMovementDialogComponent, {
            width: '700px',
            data: {
                action,
                movement: { ...movement }
            }
        });

        dialogRef
            .pipe(filter(result => result))
            .subscribe(() => this.searchFilters());
    }

}
