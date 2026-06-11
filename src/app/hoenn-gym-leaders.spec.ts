import { TestBed } from '@angular/core/testing';

import { HoennGymLeaders } from './hoenn-gym-leaders';

describe('HoennGymLeaders', () => {
  let service: HoennGymLeaders;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoennGymLeaders);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
