import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindHolidaysOfEmployeeComponent } from './find-holidays-of-employee.component';

describe('FindHolidaysOfEmployeeComponent', () => {
  let component: FindHolidaysOfEmployeeComponent;
  let fixture: ComponentFixture<FindHolidaysOfEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FindHolidaysOfEmployeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindHolidaysOfEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
