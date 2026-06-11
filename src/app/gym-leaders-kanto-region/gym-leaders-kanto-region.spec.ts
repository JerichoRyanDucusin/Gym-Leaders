import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymLeadersKantoRegion } from './gym-leaders-kanto-region';

describe('GymLeadersKantoRegion', () => {
  let component: GymLeadersKantoRegion;
  let fixture: ComponentFixture<GymLeadersKantoRegion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GymLeadersKantoRegion],
    }).compileComponents();

    fixture = TestBed.createComponent(GymLeadersKantoRegion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
