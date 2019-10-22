import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CategoriesComponent } from './manage/categories.component';
import { CreateEditCategoryModalComponent } from './create-edit/create-edit-category.component';
import { CategoriesService } from 'app/services/categories.service';
import { CategoriesRoutingModule } from './categories-routing.module';
import { ApplicationModule } from 'app/shared/application/application.module';

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
        CreateEditCategoryModalComponent,
    ],
    providers: [
        CategoriesService
    ],
    entryComponents: [
        CreateEditCategoryModalComponent,
    ]
})
export class CategoriesModule { }
