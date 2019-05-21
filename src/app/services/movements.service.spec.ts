/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MovementsService } from './movements.service';

describe('Service: Movements', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovementsService]
    });
  });

  it('should ...', inject([MovementsService], (service: MovementsService) => {
    expect(service).toBeTruthy();
  }));
});
