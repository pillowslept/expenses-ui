import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ApplicationModule } from 'app/shared/application/application.module';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        ApplicationModule,
    ],
    declarations: [
        HomeComponent
    ]
})
export class HomeModule { }
