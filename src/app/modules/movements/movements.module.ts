import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MovementsComponent } from './manage/movements.component';
import { MovementsService } from 'app/services/movements.service';
import { CategoriesService } from 'app/services/categories.service';
import { TypesService } from 'app/services/types.service';
import { FiltersService } from 'app/services/filters.service';
import { MovementsRoutingModule } from './movements-routing.module';
import { ApplicationModule } from 'app/shared/application/application.module';
import { CreateEditMovementDialogComponent } from './create-edit/create-edit-movement.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        MovementsRoutingModule,
        ApplicationModule
    ],
    declarations: [
        MovementsComponent,
        CreateEditMovementDialogComponent,
    ],
    exports: [
        MovementsComponent
    ],
    providers: [
        MovementsService,
        CategoriesService,
        TypesService,
        FiltersService,
    ],
    entryComponents: [
        CreateEditMovementDialogComponent,
    ]
})
export class MovementsModule { }
