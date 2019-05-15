import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CategoriesComponent } from './categories.component';
import { CategoriesService } from '../services/categories.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
    ],
    declarations: [
        CategoriesComponent
    ],
    exports: [
        CategoriesComponent
    ],
    providers: [
        CategoriesService
    ]
})
export class CategoriesModule { }
