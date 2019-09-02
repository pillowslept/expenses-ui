import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovementsComponent } from './manage/movements.component';
import { MovementsFormComponent } from './movements-form/movements-form.component';

const routes: Routes = [
    { path: '', redirectTo: 'manage', pathMatch: 'full' },
    { path: 'manage', component: MovementsComponent },
    { path: 'manage/create', component: MovementsFormComponent },
    { path: 'manage/edit/:id', component: MovementsFormComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MovementsRoutingModule { }
