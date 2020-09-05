import { TestBed, async } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {

    let component: HomeComponent;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [HomeComponent],
      }).compileComponents();
    }));

    beforeEach(() => {
        const fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it(`should validate the total amount of cards'`, () => {
        expect(component.CARDS).toBeDefined();
        expect(component.CARDS.length).toBeGreaterThan(0);
    });

});
