import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {

    let component: NavBarComponent;

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [NavBarComponent],
      }).compileComponents();
    }));

    beforeEach(() => {
        const fixture = TestBed.createComponent(NavBarComponent);
        component = fixture.componentInstance;
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

});
