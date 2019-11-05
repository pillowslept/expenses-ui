import { NgModule } from '@angular/core';
import {
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSortModule,
    MatCardModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatDialogModule,
    MatDividerModule,
} from '@angular/material';

const modules = [
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSortModule,
    MatCardModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatDialogModule,
    MatDividerModule,
];

@NgModule({
    imports: modules,
    exports: modules,
})
export class MaterialModule { }
