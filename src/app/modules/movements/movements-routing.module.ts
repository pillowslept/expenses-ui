import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovementsComponent } from './manage/movements.component';

const routes: Routes = [
    { path: '', redirectTo: 'manage', pathMatch: 'full' },
    { path: 'manage', component: MovementsComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MovementsRoutingModule { }
