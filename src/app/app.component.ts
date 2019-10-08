import { Component, AfterContentChecked, ChangeDetectorRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment as ENV } from 'environments/environment';
import { LoadingIndicatorService } from './services/loading-indicator.service';

@Component({
    selector: 'app-component',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentChecked {

    private readonly AVAILABLE_LANGS = ['en', 'es'];
    private readonly DEFAULT_LANG = ENV.default_lang;
    public isLoading: boolean = false;

    constructor(
        private translate: TranslateService,
        private loadingIndicatorService: LoadingIndicatorService,
        private changeDetectorRef: ChangeDetectorRef,
    ) {
        const navigatorLang = navigator.language.split('-')[0];
        this.translate.setDefaultLang(this.DEFAULT_LANG);
        const langToUse = this.AVAILABLE_LANGS.includes(navigatorLang) ? navigatorLang : this.DEFAULT_LANG;
        translate.use(langToUse);
        this.loadingIndicatorService.onLoadingChanged.subscribe((isLoading: boolean) => this.isLoading = isLoading);
    }

    ngAfterContentChecked() {
        this.changeDetectorRef.detectChanges();
    }

}
