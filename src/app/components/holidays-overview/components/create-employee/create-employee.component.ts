import {Component, inject} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {EmployeeService} from '../../../../shared/services/employee.service';
import {Employee} from '../../../../shared/interfaces/employee';
import {take} from 'rxjs';

@Component({
  selector: 'app-create-employee',
  standalone: true,
  templateUrl: './create-employee.component.html',
  imports: [
    ReactiveFormsModule
  ],
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {

  #formBuilder = inject(FormBuilder);
  #employeeService = inject(EmployeeService);
  public employeeForm: FormGroup = this.#getEmployeeFormGroup();
  public employee: Employee;

  #getEmployeeFormGroup(): FormGroup {
    return this.#formBuilder.group({
      name: [null, Validators.required],
    })
  }

  public createEmployee():void {
    this.#employeeService.createEmployee({
      name: this.getEmployeeName().value
    }).pipe(take(1)).subscribe(data => {
      this.employee = data;
    })
  }

  public getEmployeeName(): AbstractControl {
    return this.employeeForm.get('name');
  }
}
