import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { usersRouting } from './modules/users/users.routing';
import { UsersModule } from './modules/users/users.module';
import { MovementsModule } from './modules/movements/movements.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { ApplicationModule } from './shared/application/application.module';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        ApplicationModule,
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        UsersModule,
        usersRouting,
        MovementsModule,
        CategoriesModule,
        RouterModule,
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
