import {Component, inject, output, OutputEmitterRef} from '@angular/core';
import {HolidayService} from '../../../../shared/services/holiday.service';
import {AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {take} from 'rxjs';
import {Holiday} from '../../../../shared/interfaces/holiday';

@Component({
  selector: 'app-find-holidays-of-employee',
  standalone: true,
  templateUrl: './find-holidays-of-employee.component.html',
  imports: [
    ReactiveFormsModule
  ],
  styleUrl: './find-holidays-of-employee.component.scss'
})
export class FindHolidaysOfEmployeeComponent {

  #holidayService = inject(HolidayService);
  #formBuilder = inject(FormBuilder);

  public employeeIdForm: FormGroup = this.#getEmployeeIdFormGroup();
  public fetchHolidays: OutputEmitterRef<Holiday[]> = output<Holiday[]>();

  #getEmployeeIdFormGroup(): FormGroup {
    return this.#formBuilder.group({
      employeeId: [null, Validators.required]
    })
  }

  public getEmployeeId(): AbstractControl {
    return this.employeeIdForm.get('employeeId');
  }

  public getEmployeeHolidays(): void {
    this.#holidayService.getHolidaysByEmployeeID$(this.getEmployeeId().value).pipe(take(1)).subscribe(holidays => {
      this.fetchHolidays.emit(holidays);
    })
  }
}
