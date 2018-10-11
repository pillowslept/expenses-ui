import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { MovementsComponent } from './movements.component';
import { MovementsService } from './shared/movements.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
    MovementsComponent
  ],
  exports: [
    MovementsComponent
  ],
  providers: [
    MovementsService
  ]
})
export class MovementsModule { }
