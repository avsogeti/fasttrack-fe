import {Component, inject, output, OutputEmitterRef} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {HolidayService} from '../../../../shared/services/holiday.service';
import {Status} from '../../../../shared/enum/status';
import {combineLatest, map, Observable, of, take} from 'rxjs';
import {Holiday} from '../../../../shared/interfaces/holiday';

@Component({
  selector: 'app-create-holiday',
  standalone: true,
  templateUrl: './create-holiday.component.html',
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
  public createHoliday: OutputEmitterRef<Holiday[]> = output<Holiday[]>();

  #getHolidayFormGroup(): FormGroup {
    return this.#formBuilder.group({
      holidayLabel: [null, Validators.required],
      employeeId: [null, Validators.required],
      startOfHoliday: [null],
      endOfHoliday: [null],
      status: [null, Validators.required],
    })
  }

  public createHolidayOnClick(): void {
    const startOfHoliday = new Date(this.holidayForm.get('startOfHoliday').value);
    const endOfHoliday = new Date(this.holidayForm.get('endOfHoliday').value);

    combineLatest([
      this.#validateDuplicateHoliday$(startOfHoliday, endOfHoliday),
      this.#validateHolidayStartOverFiveWorkingDays$(),
      this.#createHoliday()
    ]).pipe(
      map(([isOverlapping, holidayToSoon, createHoliday]) => {
        if (isOverlapping) {
          alert('Holiday overlaps with existing holidays');
          return null;
        }
        if (holidayToSoon) {
          alert('Its not possible to schedule a holiday for over five working days');
          return null;
        }
        return createHoliday;
      })
    ).pipe(take(1)).subscribe(holiday => {
      if (holiday) {
        this.createHoliday.emit([holiday]);
      }
    });
  }

  #createHoliday(): Observable<Holiday> {
    return this.#holidayService.createHoliday$({
      holidayLabel: this.holidayForm.get('holidayLabel').value,
      employeeId: this.holidayForm.get('employeeId').value,
      startOfHoliday: this.holidayForm.get('startOfHoliday').value,
      endOfHoliday: this.holidayForm.get('endOfHoliday').value,
      status: this.holidayForm.get('status').value
    });
  }

  #validateDuplicateHoliday$(startOfHoliday: Date, endOfHoliday: Date): Observable<boolean> {
    return this.#holidayService.getHolidays$().pipe(
      map(holidays =>
        holidays.some(holiday => (startOfHoliday <= new Date(holiday.endOfHoliday)) && (endOfHoliday >= new Date(holiday.startOfHoliday))
        )
      )
    )
  }

  #validateHolidayStartOverFiveWorkingDays$(): Observable<boolean> {
    return of(this.#removeTwoDaysIfWeekendIsPassed() <= 5)
  }

  #removeTwoDaysIfWeekendIsPassed(): number {
    const currentDate = new Date()
    const startOfHolidayDate = new Date(this.holidayForm.get('startOfHoliday').value)
    const daysBetween = startOfHolidayDate.getDate() - currentDate.getDate();

    if (startOfHolidayDate <= currentDate) {
      return daysBetween - 2
    }
    return daysBetween
  }
}
