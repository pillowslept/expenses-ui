import { Routes, RouterModule } from '@angular/router';

import { MovementsComponent } from './movements.component';

const movementsRoutes: Routes = [
  { path: 'movements', component: MovementsComponent, pathMatch: 'full' }
];

export const movementsRouting = RouterModule.forChild(movementsRoutes);
