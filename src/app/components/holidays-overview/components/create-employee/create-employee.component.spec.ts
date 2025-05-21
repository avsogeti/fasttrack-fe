import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeeComponent } from './create-employee.component';
import {provideHttpClient} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {EmployeeService} from '../../../../shared/services/employee.service';
import {of} from 'rxjs';

describe('CreateEmployeeComponent', () => {
  let component: CreateEmployeeComponent;
  let fixture: ComponentFixture<CreateEmployeeComponent>;
  let employeeService: EmployeeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEmployeeComponent],
      providers:[
        provideHttpClient(),
        {provide: FormBuilder},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEmployeeComponent);
    employeeService = TestBed.inject(EmployeeService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a employee', () => {
    const formGroup = component.employeeForm;
    formGroup.controls.name.setValue('John Doe');

    fixture.detectChanges();
    const event = new Event('submit');
    jest.spyOn(event, 'preventDefault');

    jest.spyOn(employeeService, 'createEmployee$').mockReturnValue(of({
      employeeId: 'KLM000002', name: 'John Doe'
    }))

    component.createEmployee();
    expect(employeeService.createEmployee$).toHaveBeenCalledWith({name: 'John Doe'});
  })
});
