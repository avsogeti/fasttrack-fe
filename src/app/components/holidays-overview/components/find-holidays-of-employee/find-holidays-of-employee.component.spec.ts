import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FindHolidaysOfEmployeeComponent} from './find-holidays-of-employee.component';
import {provideHttpClient} from '@angular/common/http';

describe('FindHolidaysOfEmployeeComponent', () => {
  let component: FindHolidaysOfEmployeeComponent;
  let fixture: ComponentFixture<FindHolidaysOfEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindHolidaysOfEmployeeComponent],
      providers: [
        provideHttpClient()
      ]
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
