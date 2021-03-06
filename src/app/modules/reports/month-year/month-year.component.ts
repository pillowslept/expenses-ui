import { Component, OnInit } from '@angular/core';
import { FiltersService } from 'app/services/filters.service';
import { NotificationService } from 'app/services/notification.service';
import { ManageException } from 'app/utils/exceptions/manage-exceptions';
import { ReportsService } from 'app/services/reports.service';

@Component({
    selector: 'app-month-year',
    templateUrl: './month-year.component.html',
    styleUrls: ['./month-year.component.scss']
})
export class MonthYearReportComponent implements OnInit {

    public months: Array<any> = [];
    public selectedMonth: number;
    public selectedYear: number;
    public years: Array<any> = [];
    public url: any;

    constructor(
        private readonly reportsService: ReportsService,
        private readonly filtersService: FiltersService,
        private readonly notificationService: NotificationService,
    ) { }

    ngOnInit(): void {
        this.searchFilters();
    }

    private searchFilters(): void {
        this.filtersService.getMonths().subscribe(({ data }) => {
            this.months = data;
            this.selectedMonth = new Date().getMonth() + 1;
        }, err => {
            this.notificationService.error(ManageException.handle(err));
        });
        this.years = this.filtersService.getYears();
        this.selectedYear = this.years[0].id;
    }

    get isValidData(): boolean {
        return !!this.selectedMonth && !!this.selectedYear;
    }

    generateReport(): void {
        if (this.isValidData) {
            this.url = this.reportsService.byMonthAndYear(this.selectedMonth, this.selectedYear);
        }
    }

}
