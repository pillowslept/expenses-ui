import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { UsersComponent } from './users.component';
import { UsersService } from './shared/users.service';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  declarations: [
    UsersComponent,
    UserFormComponent
  ],
  exports: [
    UsersComponent
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }