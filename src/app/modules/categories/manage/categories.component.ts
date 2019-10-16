import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoriesService } from 'app/services/categories.service';
import { ACTIVE, INACTIVE, CATEGORIES_COLUMNS } from 'app/utils/constants/categories';
import { NotificationService } from 'app/services/notification.service';
import { ManageException } from 'app/utils/exceptions/manage-exceptions';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

    public readonly ACTIVE = ACTIVE;
    public readonly INACTIVE = INACTIVE;
    public displayedColumns: string[] = CATEGORIES_COLUMNS;
    public categories: MatTableDataSource<any>;

    constructor(
        private categoriesService: CategoriesService,
        private notificationService: NotificationService
    ) { }

    ngOnInit() {
        this.loadCategories();
    }

    private loadCategories() {
        this.categoriesService.get().subscribe(({ data }) => {
            this.categories = new MatTableDataSource(data);
            this.categories.sort = this.sort;
            this.categories.paginator = this.paginator;
        }, err => {
            this.notificationService.error(ManageException.handle(err));
        });
    }

    inactivate(categoryId: number) {
        this.categoriesService.inactivate(categoryId).subscribe(({ data }) => {
            this.notificationService.success(data);
            this.loadCategories();
        }, err => {
            this.notificationService.error(ManageException.handle(err));
        });
    }

    activate(categoryId: number) {
        this.categoriesService.activate(categoryId).subscribe(({ data }) => {
            this.notificationService.success(data);
            this.loadCategories();
        }, err => {
            this.notificationService.error(ManageException.handle(err));
        });
    }

}
