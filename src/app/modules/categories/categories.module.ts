import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CategoriesComponent } from './manage/categories.component';
import { CreateEditCategoryDialogComponent } from './create-edit/create-edit-category.component';
import { CategoriesService } from 'app/services/categories.service';
import { CategoriesRoutingModule } from './categories-routing.module';
import { ApplicationModule } from 'app/shared/application/application.module';
import { DialogService } from 'app/services/dialog.service';

@NgModule({
    imports: [
        CommonModule,
        CategoriesRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        ApplicationModule,
    ],
    declarations: [
        CategoriesComponent,
        CreateEditCategoryDialogComponent,
    ],
    providers: [
        CategoriesService,
        DialogService,
    ],
    entryComponents: [
        CreateEditCategoryDialogComponent,
    ]
})
export class CategoriesModule { }
