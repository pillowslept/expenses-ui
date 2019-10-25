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
    public months: any = [];
    public monthsFilter: number;
    public yearFilter: number;
    public years: any = [];
    public pageNumber = INITIAL_PAGE;
    public pageSize = PAGE_SIZE;
    public readonly PAGE_SIZE_OPTIONS = PAGE_SIZE_OPTIONS;

    constructor(
        private movementsService: MovementsService,
        private filtersService: FiltersService,
        private notificationService: NotificationService,
        private dialogService: DialogService,
    ) { }

    ngOnInit() {
        this.searchFilters();
    }

    private searchFilters() {
        this.filtersService.get().subscribe(({ data }) => {
            this.months = data;
            this.years = [{ id: 2019, description: '2019'}];
            this.monthsFilter = new Date().getMonth() + 1;
            this.yearFilter = this.years[0].id;
            this.filterByMonthAndYear();
        }, err => {
            this.notificationService.error(ManageException.handle(err));
        });
    }

    private searchMovements() {
        this.movementsService.get(this.pageNumber, this.pageSize).subscribe(({ data }) => {
            this.movements = new MatTableDataSource(data);
            this.movements.sort = this.sort;
            this.movements.paginator = this.paginator;
        }, err => {
            this.notificationService.error(ManageException.handle(err));
        });
    }

    filterMovements() {
        this.resetFilters();
        if (this.isValidMonth && this.isValidYear) {
            this.filterByMonthAndYear();
        } else if (!this.isValidMonth && !this.isValidYear) {
            this.searchMovements();
        }
    }

    private filterByMonthAndYear() {
        this.movementsService.getByMonthAndYear(
            this.monthsFilter, this.yearFilter, this.pageNumber, this.pageSize).subscribe(({ data }) => {
            this.movements = new MatTableDataSource(data);
            this.movements.sort = this.sort;
            this.movements.paginator = this.paginator;
        }, err => {
            this.notificationService.error(ManageException.handle(err));
        });
    }

    private resetFilters() {
        this.pageNumber = 0;
        this.pageSize = 10;
    }

    get isValidMonth() {
        return this.monthsFilter !== this.ALL_OPTION;
    }

    get isValidYear() {
        return this.yearFilter !== this.ALL_OPTION;
    }

    applyFilter(filterValue: string) {
        this.movements.filter = filterValue.trim().toLowerCase();
    }

    openCreateEditDialog(action: string, movement: any = {}): void {
        const data = {
            width: '700px',
            data: {
                action,
                movement: { ...movement }
            }
        };

        const dialog = this.dialogService.open(CreateEditMovementDialogComponent, data);

        dialog.subscribe((result: boolean) => {
            if (result) {
                this.searchFilters();
            }
        });
    }

}
