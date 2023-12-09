import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavesAppliedComponent } from './leaves-applied.component';

describe('LeavesAppliedComponent', () => {
  let component: LeavesAppliedComponent;
  let fixture: ComponentFixture<LeavesAppliedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeavesAppliedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavesAppliedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
