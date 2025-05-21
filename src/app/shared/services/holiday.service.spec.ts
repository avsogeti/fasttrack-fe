import {TestBed, waitForAsync} from '@angular/core/testing';

import {HolidayService} from './holiday.service';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {Status} from '../enum/status';

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

  it('should create a holiday', () => {
    const mockResponse = {
      holidayId: '123',
      holidayLabel: 'Holiday',
      employeeId: 'KLM000001',
      startOfHoliday: '2023-10-01',
      endOfHoliday: '2023-10-02',
      status: Status.DRAFT
    };
    const mockHoliday = {
      holidayLabel: 'Holiday',
      employeeId: 'KLM000001',
      startOfHoliday: '2023-10-01',
      endOfHoliday: '2023-10-02',
      status: Status.DRAFT
    };
    service.createHoliday$(mockHoliday).subscribe(response => expect(response).toEqual(mockResponse));
  })

  it('should receive all holidays', () => {
    const mockResponse = [{
      holidayId: '123',
      holidayLabel: 'Holiday',
      employeeId: 'KLM000001',
      startOfHoliday: '2023-10-01',
      endOfHoliday: '2023-10-02',
      status: Status.DRAFT
    }];
    service.getHolidays$().subscribe(response => expect(response).toEqual(mockResponse));
  })

  it('should receive all holidays of employee', () => {
    const mockResponse = [{
      holidayId: '123',
      holidayLabel: 'Holiday',
      employeeId: 'KLM000001',
      startOfHoliday: '2023-10-01',
      endOfHoliday: '2023-10-02',
      status: Status.DRAFT
    }];
    service.getHolidaysByEmployeeID$('KLM000001').subscribe(response => expect(response).toEqual(mockResponse));
  })

  it('should delete holiday from employee', () => {
    const mockResponse = [];
    service.deleteHoliday$('123').subscribe(response => expect(response).toEqual(mockResponse));
  })
});
