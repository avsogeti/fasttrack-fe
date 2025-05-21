import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHolidayComponent } from './create-holiday.component';
import {provideHttpClient} from '@angular/common/http';

describe('CreateHolidayComponent', () => {
  let component: CreateHolidayComponent;
  let fixture: ComponentFixture<CreateHolidayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateHolidayComponent],
      providers:[
        provideHttpClient()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
