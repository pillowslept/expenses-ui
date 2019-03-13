import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';

import { CategoriesComponent } from './categories.component';
import { CategoriesService } from 'app/services/categories.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule,
        MaterializeModule
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
