import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonthYearReportComponent } from './month-year/month-year.component';

const routes: Routes = [
    { path: '', redirectTo: 'month-year', pathMatch: 'full' },
    { path: 'month-year', component: MonthYearReportComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReportsRoutingModule { }
