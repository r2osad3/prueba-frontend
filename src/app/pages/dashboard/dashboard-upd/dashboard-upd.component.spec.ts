import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUpdComponent } from './dashboard-upd.component';

describe('DashboardUpdComponent', () => {
  let component: DashboardUpdComponent;
  let fixture: ComponentFixture<DashboardUpdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardUpdComponent]
    });
    fixture = TestBed.createComponent(DashboardUpdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
