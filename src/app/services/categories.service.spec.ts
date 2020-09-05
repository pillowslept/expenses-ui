import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CategoriesService } from './categories.service';

describe('CategoriesService', () => {

    let service: CategoriesService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [CategoriesService]
        });
    });

    beforeEach(() => {
        service = TestBed.get(CategoriesService);
    });

    it('should create the component', () => {
        expect(service).toBeTruthy();
    });

});
