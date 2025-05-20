import {Component, inject, output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {HolidayService} from '../../../../shared/services/holiday.service';
import {Status} from '../../../../shared/enum/status';
import {take} from 'rxjs';
import {Holiday} from '../../../../shared/interfaces/holiday';

@Component({
  selector: 'app-create-holiday',
  standalone: true,
  templateUrl: './create-holiday-.component.html',
  styleUrl: './create-holiday.component.css',
  imports: [
    ReactiveFormsModule,
  ]
})
export class CreateHolidayComponent {

  #formBuilder = inject(FormBuilder);
  #holidayService = inject(HolidayService);

  public holidayForm: FormGroup = this.#getHolidayFormGroup();
  public statusList: string[] = [Status.DRAFT, Status.REQUESTED, Status.SCHEDULED, Status.ARCHIVED];

  createHoliday = output<Holiday[]>();

  #getHolidayFormGroup(): FormGroup {
    return this.#formBuilder.group({
      holidayLabel: [null, Validators.required],
      employeeId: [null, Validators.required],
      startOfHoliday: [null, Validators.required],
      endOfHoliday: [null, Validators.required],
      status: [null, Validators.required],
    })
  }

  createHolidayOnClick():void {
    this.#holidayService.createHoliday({
      holidayLabel: this.holidayForm.get('holidayLabel').value,
      employeeId: this.holidayForm.get('employeeId').value,
      startOfHoliday: this.holidayForm.get('startOfHoliday').value,
      endOfHoliday: this.holidayForm.get('endOfHoliday').value,
      status: this.holidayForm.get('status').value
    }).pipe(take(1)).subscribe(data => {
      this.createHoliday.emit([data]);
    })
  }
}
