import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MovementsComponent } from './movements.component';
import { MovementsService } from 'app/services/movements.service';
import { MovementsFormComponent } from './movements-form/movements-form.component';
import { CategoriesService } from 'app/services/categories.service';
import { TypesService } from 'app/services/types.service';
import { FiltersService } from 'app/services/filters.service';
import { MovementsRoutingModule } from './movements-routing.module';
import { NotificationService } from 'app/services/notification.service';
import { ApplicationModule } from 'app/shared/application/application.module';

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
        MovementsFormComponent
    ],
    exports: [
        MovementsComponent
    ],
    providers: [
        MovementsService,
        CategoriesService,
        TypesService,
        FiltersService,
        NotificationService,
    ]
})
export class MovementsModule { }
