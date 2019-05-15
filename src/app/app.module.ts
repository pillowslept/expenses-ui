import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './modules/nav-bar/nav-bar.component';
import { HomeComponent } from './modules/home/home.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { routing } from './app.routing';
import { usersRouting } from './modules/users/users.routing';
import { UsersModule } from './modules/users/users.module';
import { movementsRouting } from './modules/movements/movements.routing';
import { MovementsModule } from './modules/movements/movements.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { categoriesRouting } from './modules/categories/categories.routing';

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        HomeComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        UsersModule,
        usersRouting,
        MovementsModule,
        movementsRouting,
        CategoriesModule,
        categoriesRouting,
        routing,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
