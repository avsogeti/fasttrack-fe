import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidaysOverviewComponent } from './holidays-overview.component';

describe('HolidaysOverviewComponent', () => {
  let component: HolidaysOverviewComponent;
  let fixture: ComponentFixture<HolidaysOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HolidaysOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolidaysOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
