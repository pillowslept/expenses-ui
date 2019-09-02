import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './manage/categories.component';
import { CreateEditCategoryComponent } from './create-edit/create-edit-category.component';

const routes: Routes = [
    { path: '', redirectTo: 'manage', pathMatch: 'full' },
    { path: 'manage', component: CategoriesComponent },
    { path: 'manage/create', component: CreateEditCategoryComponent },
    { path: 'manage/edit/:id', component: CreateEditCategoryComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CategoriesRoutingModule { }
