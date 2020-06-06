import { Category } from 'app/entities/category';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoriesService } from 'app/services/categories.service';
import { ACTIVE, INACTIVE, CATEGORIES_COLUMNS } from 'app/utils/constants/categories';
import { NotificationService } from 'app/services/notification.service';
import { TranslateService } from '@ngx-translate/core';
import { ManageException } from 'app/utils/exceptions/manage-exceptions';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { CreateEditCategoryDialogComponent } from '../create-edit/create-edit-category.component';
import { DialogService } from 'app/services/dialog.service';
import { ConfirmActionDialogComponent } from 'app/shared/application/dialogs/confirm-action/confirm-action.component';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {

    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    public readonly ACTIVE = ACTIVE;
    public readonly INACTIVE = INACTIVE;
    public displayedColumns: string[] = CATEGORIES_COLUMNS;
    public categories: MatTableDataSource<Category>;

    constructor(
        private readonly categoriesService: CategoriesService,
        private readonly notificationService: NotificationService,
        private readonly translateService: TranslateService,
        private readonly dialogService: DialogService,
    ) { }

    ngOnInit(): void {
        this.loadCategories();
    }

    private loadCategories(): void {
        this.categoriesService.get().subscribe(({ data }) => {
            this.categories = new MatTableDataSource(data);
            this.categories.sort = this.sort;
            this.categories.paginator = this.paginator;
        }, err => {
            this.notificationService.error(ManageException.handle(err));
        });
    }

    private inactivate(categoryId: number): void {
        this.categoriesService.inactivate(categoryId).subscribe(() => {
            this.notificationService.success(this.translateService.instant('MESSAGES.ACTION_SUCCESS'));
            this.loadCategories();
        }, err => {
            this.notificationService.error(ManageException.handle(err));
        });
    }

    private activate(categoryId: number): void {
        this.categoriesService.activate(categoryId).subscribe(() => {
            this.notificationService.success(this.translateService.instant('MESSAGES.ACTION_SUCCESS'));
            this.loadCategories();
        }, err => {
            this.notificationService.error(ManageException.handle(err));
        });
    }

    openDialog(action: string, category = {}): void {
        const dialogRef = this.dialogService.open(CreateEditCategoryDialogComponent, {
            width: '400px',
            data: { ...category },
        });

        dialogRef
            .pipe(filter(result => result))
            .subscribe(() => this.loadCategories());
    }

    confirmAction(action: string, categoryId: number): void {
        const dialogRef = this.dialogService.open(ConfirmActionDialogComponent);

        dialogRef
            .pipe(filter(result => result))
            .subscribe(() => {
                if (action === 'activate') {
                    this.activate(categoryId);
                } else {
                    this.inactivate(categoryId);
                }
            });
    }

}
