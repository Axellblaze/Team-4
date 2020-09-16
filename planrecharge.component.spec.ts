import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanrechargeComponent } from './planrecharge.component';

describe('PlanrechargeComponent', () => {
  let component: PlanrechargeComponent;
  let fixture: ComponentFixture<PlanrechargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanrechargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanrechargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
