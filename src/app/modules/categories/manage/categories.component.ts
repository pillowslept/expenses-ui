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

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss'],
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
        private notificationService: NotificationService,
        private translateService: TranslateService,
        private dialogService: DialogService,
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

    private inactivate(categoryId: number) {
        this.categoriesService.inactivate(categoryId).subscribe(() => {
            this.notificationService.success(this.translateService.instant('MESSAGES.ACTION_SUCCESS'));
            this.loadCategories();
        }, err => {
            this.notificationService.error(ManageException.handle(err));
        });
    }

    private activate(categoryId: number) {
        this.categoriesService.activate(categoryId).subscribe(() => {
            this.notificationService.success(this.translateService.instant('MESSAGES.ACTION_SUCCESS'));
            this.loadCategories();
        }, err => {
            this.notificationService.error(ManageException.handle(err));
        });
    }

    openDialog(action: string, category: any = {}): void {
        const data = {
            width: '400px',
            data: {
                action,
                category: { ...category }
            }
        };

        const dialog = this.dialogService.open(CreateEditCategoryDialogComponent, data);

        dialog.subscribe((result: boolean) => {
            if (result) {
                this.loadCategories();
            }
        });
    }

    confirmAction(action: string, categoryId: number): void {
        const dialog = this.dialogService.open(ConfirmActionDialogComponent);

        dialog.subscribe((result: boolean) => {
            if (result) {
                if (action === 'activate') {
                    this.activate(categoryId);
                } else {
                    this.inactivate(categoryId);
                }
            }
        });
    }

}
