import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MovementsModule } from 'app/modules/movements/movements.module';
import { CategoriesModule } from 'app/modules/categories/categories.module';
import { ApplicationModule } from 'app/shared/application/application.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LoadingIndicatorService } from './services/loading-indicator.service';
import { RequestInterceptor } from './shared/interceptor/request.interceptor';

@NgModule({
    imports: [
        ApplicationModule,
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        }),
        MovementsModule,
        CategoriesModule,
        RouterModule,
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent],
    providers: [
        LoadingIndicatorService,
        { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
    ],
})
export class AppModule { }

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
