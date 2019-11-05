import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApplicationModule } from 'app/shared/application/application.module';
import { MonthYearReportComponent } from './month-year/month-year.component';
import { ReportsService } from 'app/services/reports.service';
import { ReportsRoutingModule } from './reports-routing.module';
import { SelectReportFiltersComponent } from './select-filters/select-filters.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        ReportsRoutingModule,
        ApplicationModule
    ],
    declarations: [
        MonthYearReportComponent,
        SelectReportFiltersComponent,
    ],
    providers: [
        ReportsService,
    ],
})
export class ReportsModule { }
