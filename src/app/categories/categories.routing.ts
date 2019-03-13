import { Routes, RouterModule } from '@angular/router';

import { CategoriesComponent } from './categories.component';

const categoriesRoutes: Routes = [
    { path: 'categories', component: CategoriesComponent, pathMatch: 'full' }
];

export const categoriesRouting = RouterModule.forChild(categoriesRoutes);
