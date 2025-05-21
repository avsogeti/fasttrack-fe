import {TestBed, waitForAsync} from '@angular/core/testing';

import { HolidayService } from './holiday.service';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('HolidayService', () => {
  let service: HolidayService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [HolidayService,
      provideHttpClient(),
      provideHttpClientTesting()]
    });

  }));
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HolidayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
