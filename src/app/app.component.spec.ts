import { TestBed, async } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { LoadingIndicatorService } from './services/loading-indicator.service';

describe('AppComponent', () => {

    let component: AppComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                TranslateModule.forRoot(),
            ],
            declarations: [
                AppComponent
            ],
            providers: [
                LoadingIndicatorService
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        const fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

});
