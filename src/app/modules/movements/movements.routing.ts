import { Routes, RouterModule } from '@angular/router';

import { MovementsComponent } from './movements.component';
import { MovementsFormComponent } from './movements-form/movements-form.component';

const movementsRoutes: Routes = [
    { path: 'movements', component: MovementsComponent, pathMatch: 'full' },
    { path: 'movements/create', component: MovementsFormComponent },
    { path: 'movements/edit/:id', component: MovementsFormComponent }
];

export const movementsRouting = RouterModule.forChild(movementsRoutes);
