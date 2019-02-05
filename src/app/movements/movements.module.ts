import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { MovementsComponent } from './movements.component';
import { MovementsService } from './shared/movements.service';
import { MovementsFormComponent } from './movements-form/movements-form.component';
import { MaterializeModule } from 'angular2-materialize';

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
        MovementsComponent,
        MovementsFormComponent
    ],
    exports: [
        MovementsComponent
    ],
    providers: [
        MovementsService
    ]
})
export class MovementsModule { }
