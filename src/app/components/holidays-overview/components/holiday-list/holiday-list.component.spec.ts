import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayListComponent } from './holiday-list.component';
import {provideHttpClient} from '@angular/common/http';

describe('HolidayListComponent', () => {
  let component: HolidayListComponent;
  let fixture: ComponentFixture<HolidayListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HolidayListComponent],
      providers:[
        provideHttpClient()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolidayListComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('holidays', [{}])

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
