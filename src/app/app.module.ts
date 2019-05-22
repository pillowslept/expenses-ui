import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { usersRouting } from './modules/users/users.routing';
import { UsersModule } from './modules/users/users.module';
import { MovementsModule } from 'app/modules/movements/movements.module';
import { CategoriesModule } from 'app/modules/categories/categories.module';
import { ApplicationModule } from 'app/shared/application/application.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
    imports: [
        ApplicationModule,
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule ,
        FormsModule,
        HttpClientModule,
        UsersModule,
        usersRouting,
        MovementsModule,
        CategoriesModule,
        RouterModule,
        ToastrModule.forRoot(),
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
