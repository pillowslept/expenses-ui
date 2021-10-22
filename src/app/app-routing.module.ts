import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
    { path: 'my-profile', loadChildren: () => import('./modules/my-profile/my-profile.module').then(m => m.MyProfileModule) },
    { path: 'not-found', loadChildren: () => import('./modules/not-found/not-found.module').then(m => m.NotFoundModule) },
    { path: 'movements', loadChildren: () => import('./modules/movements/movements.module').then(m => m.MovementsModule) },
    { path: 'categories', loadChildren: () => import('./modules/categories/categories.module').then(m => m.CategoriesModule) },
    { path: 'reports', loadChildren: () => import('./modules/reports/reports.module').then(m => m.ReportsModule) },
    { path: '**', redirectTo: 'not-found' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
