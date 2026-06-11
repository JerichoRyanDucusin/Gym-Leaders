import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymLeadersJohtoRegion } from './gym-leaders-johto-region';

describe('GymLeadersJohtoRegion', () => {
  let component: GymLeadersJohtoRegion;
  let fixture: ComponentFixture<GymLeadersJohtoRegion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GymLeadersJohtoRegion],
    }).compileComponents();

    fixture = TestBed.createComponent(GymLeadersJohtoRegion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
