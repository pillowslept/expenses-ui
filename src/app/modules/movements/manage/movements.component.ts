import { Component, OnInit, ViewChild } from '@angular/core';
import { MovementsService } from 'app/services/movements.service';
import { FiltersService } from 'app/services/filters.service';
import { Movement } from 'app/entities/movement';
import { NotificationService } from 'app/services/notification.service';
import { ManageException } from 'app/utils/exceptions/manage-exceptions';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ExportToCsv } from 'export-to-csv';
import { MOVEMENTS_COLUMNS } from 'app/utils/constants/movements';
import { PAGE_SIZE_OPTIONS, PAGE_SIZE, INITIAL_PAGE } from 'app/utils/constants/tables';

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
        private notificationService: NotificationService
    ) { }

    ngOnInit() {
        this.searchMovements();
        this.searchFilters();
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

    private searchFilters() {
        this.filtersService.get().subscribe(({ data }) => {
            this.months = data;
            this.years = [{ id: 2019, description: '2019'}];
            this.monthsFilter = this.ALL_OPTION;
            this.yearFilter = this.ALL_OPTION;
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
                    this.movements = new MatTableDataSource(data);
                    this.movements.sort = this.sort;
                    this.movements.paginator = this.paginator;
                }, err => {
                    this.notificationService.error(ManageException.handle(err));
                });
            }
        }
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

    download() {
        const data = [
            {
              name: 'Test 1',
              age: 13,
              average: 8.2,
              approved: true,
              description: "using 'Content here, content here' "
            },
            {
              name: 'Test 2',
              age: 11,
              average: 8.2,
              approved: true,
              description: "using 'Content here, content here' "
            },
            {
              name: 'Test 4',
              age: 10,
              average: 8.2,
              approved: true,
              description: "using 'Content here, content here' "
            },
          ];

        const options = { 
            fieldSeparator: ',',
            quoteStrings: '"',
            decimalSeparator: '.',
            showLabels: true, 
            showTitle: true,
            title: 'My Awesome CSV',
            useTextFile: false,
            useBom: true,
            // useKeysAsHeaders: true,
            headers: ['Column 1', 'Column 2']
        };

        const csvExporter = new ExportToCsv(options);

        csvExporter.generateCsv(data);
    }
}
