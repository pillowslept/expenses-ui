import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CategoriesComponent } from './categories.component';
import { CategoriesService } from 'app/services/categories.service';
import { CategoriesRoutingModule } from './categories-routing.module';

@NgModule({
    imports: [
        CommonModule,
        CategoriesRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
    ],
    declarations: [
        CategoriesComponent
    ],
    providers: [
        CategoriesService
    ]
})
export class CategoriesModule { }
