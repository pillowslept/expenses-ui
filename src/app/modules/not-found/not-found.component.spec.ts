import { TestBed, waitForAsync } from '@angular/core/testing';
import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {

    let component: NotFoundComponent;

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NotFoundComponent],
      }).compileComponents();
    }));

    beforeEach(() => {
        const fixture = TestBed.createComponent(NotFoundComponent);
        component = fixture.componentInstance;
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

});
