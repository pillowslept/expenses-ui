import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found.component';
import { NotFoundRoutingModule } from './not-found-routing.module';
import { ApplicationModule } from 'app/shared/application/application.module';

@NgModule({
    imports: [
        CommonModule,
        NotFoundRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        ApplicationModule,
    ],
    declarations: [
        NotFoundComponent
    ]
})
export class NotFoundModule { }
