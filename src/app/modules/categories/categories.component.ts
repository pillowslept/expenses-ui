import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoriesService } from 'app/services/categories.service';
import { ACTIVE, INACTIVE } from 'app/utils/constants/categories';
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

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    public readonly ACTIVE = ACTIVE;
    public readonly INACTIVE = INACTIVE;
    public displayedColumns: string[] = ['id', 'description', 'state', 'actions'];
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

    inactivate(categoryId) {
        this.categoriesService.inactivate(categoryId).subscribe(() => {
            this.loadCategories();
        }, err => {
            this.notificationService.error(ManageException.handle(err));
        });
    }

    activate(categoryId) {
        this.categoriesService.activate(categoryId).subscribe(() => {
            this.loadCategories();
        }, err => {
            this.notificationService.error(ManageException.handle(err));
        });
    }

}
