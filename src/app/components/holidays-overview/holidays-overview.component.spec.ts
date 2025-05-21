import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidaysOverviewComponent } from './holidays-overview.component';
import {provideHttpClient} from '@angular/common/http';

describe('HolidaysOverviewComponent', () => {
  let component: HolidaysOverviewComponent;
  let fixture: ComponentFixture<HolidaysOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HolidaysOverviewComponent],
      providers:[
        provideHttpClient()
      ]
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
