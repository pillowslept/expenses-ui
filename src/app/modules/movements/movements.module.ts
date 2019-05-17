import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MovementsComponent } from './movements.component';
import { MovementsService } from './shared/movements.service';
import { MovementsFormComponent } from './movements-form/movements-form.component';
import { CategoriesService } from 'src/app/services/categories.service';
import { TypesService } from 'src/app/services/types.service';
import { FiltersService } from 'src/app/services/filters.service';
import { MovementsRoutingModule } from './movements-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        MovementsRoutingModule
    ],
    declarations: [
        MovementsComponent,
        MovementsFormComponent
    ],
    exports: [
        MovementsComponent
    ],
    providers: [
        MovementsService,
        CategoriesService,
        TypesService,
        FiltersService
    ]
})
export class MovementsModule { }
