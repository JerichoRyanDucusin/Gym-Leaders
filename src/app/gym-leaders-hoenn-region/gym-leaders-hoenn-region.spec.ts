import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymLeadersHoennRegion } from './gym-leaders-hoenn-region';

describe('GymLeadersHoennRegion', () => {
  let component: GymLeadersHoennRegion;
  let fixture: ComponentFixture<GymLeadersHoennRegion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GymLeadersHoennRegion],
    }).compileComponents();

    fixture = TestBed.createComponent(GymLeadersHoennRegion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
