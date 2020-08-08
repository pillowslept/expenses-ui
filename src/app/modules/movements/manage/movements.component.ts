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
import { PAGE_SIZE_OPTIONS, PAGE_SIZE, INITIAL_PAGE, DEFAULT_PAGINATION } from 'app/utils/constants/tables';
import { CreateEditMovementDialogComponent } from '../create-edit/create-edit-movement.component';
import { DialogService } from 'app/services/dialog.service';
import { filter } from 'rxjs/operators';
import * as selectn from 'selectn';

@Component({
    selector: 'app-movements',
    templateUrl: './movements.component.html',
    styleUrls: ['./movements.component.scss']
})
export class MovementsComponent implements OnInit {

    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    private readonly ALL_OPTION = 0;
    public displayedColumns: string[] = MOVEMENTS_COLUMNS;
    public movements: MatTableDataSource<Movement>;
    public months: Array<any> = [];
    public monthsFilter: number;
    public yearFilter: number;
    public years: Array<any> = [];
    public pagination = { ...DEFAULT_PAGINATION };
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
        this.years = this.filtersService.getYears();
        this.yearFilter = this.years[0].id;
        this.filtersService.getMonths().subscribe(({ data }) => {
            this.months = data;
            this.monthsFilter = new Date().getMonth() + 1;
            this.applyFilters();
        }, err => {
            this.notificationService.error(ManageException.handle(err));
        });
    }

    private searchMovements(filters = {}): void {
        const { pageNumber, pageSize } = this.pagination;
        this.movementsService.getByFilters(pageNumber, pageSize, filters).subscribe(({ data }) => {
            this.movements = new MatTableDataSource(selectn('content', data) || []);
            this.pagination.total = selectn('totalElements', data) || 0;
            this.movements.sort = this.sort;
        }, err => {
            this.notificationService.error(ManageException.handle(err));
        });
    }

    paginate({ pageIndex, pageSize }): void {
        this.pagination.pageNumber = pageIndex;
        this.pagination.pageSize = pageSize;
        this.applyFilters();
    }

    filterMovements(): void {
        if (this.areValidFilters) {
            this.resetFilters();
        }
        this.applyFilters();
    }

    private applyFilters(): void {
        if (this.areValidFilters) {
            const filters = {
                month: this.monthsFilter,
                year: this.yearFilter,
            };
            this.searchMovements(filters);
        } else if (!this.isValidMonth && !this.isValidYear) {
            this.searchMovements();
        }
    }

    private resetFilters(): void {
        this.pagination.pageNumber = INITIAL_PAGE;
        this.pagination.pageSize = PAGE_SIZE;
        if (this.paginator) {
            this.paginator.pageIndex = 0;
        }
    }

    get isValidMonth(): boolean {
        return this.monthsFilter !== this.ALL_OPTION;
    }

    get isValidYear(): boolean {
        return this.yearFilter !== this.ALL_OPTION;
    }

    private get areValidFilters(): boolean {
        return this.isValidMonth && this.isValidYear;
    }

    applyTableFilter(filterValue: string): void {
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
            .subscribe(() => this.applyFilters());
    }

}
