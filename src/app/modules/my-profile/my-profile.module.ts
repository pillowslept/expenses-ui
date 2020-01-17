import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MyProfileComponent } from './my-profile.component';
import { MyProfileRoutingModule } from './my-profile-routing.module';
import { ApplicationModule } from 'app/shared/application/application.module';

@NgModule({
    imports: [
        CommonModule,
        MyProfileRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        ApplicationModule,
    ],
    declarations: [
        MyProfileComponent
    ]
})
export class MyProfileModule { }
