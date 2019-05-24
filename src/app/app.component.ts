import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment as ENV } from 'environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    private readonly AVAILABLE_LANGS = ['en', 'es'];
    private readonly DEFAULT_LANG = ENV.default_lang;

    constructor(
        private translate: TranslateService
    ) {
        const navigatorLang = navigator.language.split('-')[0];
        translate.setDefaultLang(this.DEFAULT_LANG);
        const langToUse = this.AVAILABLE_LANGS.includes(navigatorLang) ? navigatorLang : this.DEFAULT_LANG;
        translate.use(langToUse);
    }

}
