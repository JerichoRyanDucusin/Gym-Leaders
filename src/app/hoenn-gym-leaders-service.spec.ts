import { TestBed } from '@angular/core/testing';
import { HoennGymLeadersService } from './HoennGymLeader';
HoennGymLeadersService // FIXED: Local path reference

describe('HoennGymLeadersService', () => {
  let service: HoennGymLeadersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoennGymLeadersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
