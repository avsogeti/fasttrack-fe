import {TestBed, waitForAsync} from '@angular/core/testing';

import {EmployeeService} from './employee.service';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('EmployeeService', () => {
  let service: EmployeeService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeService,
        provideHttpClient(),
        provideHttpClientTesting()]
    });
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create employee by name', () => {
    const mockResponse = {employeeId: 'KLM000002', name: 'John Doe'};
    const mockEmployee = {employeeId: null, name: 'John Doe'};
    service.createEmployee$(mockEmployee).subscribe(response => expect(response).toEqual(mockResponse));
  })
});
