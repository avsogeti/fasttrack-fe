import {Component, inject, signal} from '@angular/core';
import {CreateEmployeeComponent} from './components/create-employee/create-employee.component';
import {HolidayListComponent} from './components/holiday-list/holiday-list.component';
import {CreateHolidayComponent} from './components/create-holiday/create-holiday.component';
import {Holiday} from '../../shared/interfaces/holiday';
import {take} from 'rxjs';
import {HolidayService} from '../../shared/services/holiday.service';
import {
  FindHolidaysOfEmployeeComponent
} from './components/find-holidays-of-employee/find-holidays-of-employee.component';

@Component({
  selector: 'app-holidays-overview',
  standalone: true,
  templateUrl: './holidays-overview.component.html',
  styleUrl: './holidays-overview.component.css',
  imports: [
    CreateEmployeeComponent,
    HolidayListComponent,
    CreateHolidayComponent,
    FindHolidaysOfEmployeeComponent
  ]
})
export class HolidaysOverviewComponent {

  #holidayService = inject(HolidayService);
  public holidays = signal<Holiday[]>([]);

  public addHoliday(holiday: Holiday[]) {
    this.holidays.set(holiday);
  }

  public deleteHoliday(holiday: Holiday) {
    this.#holidayService.deleteHoliday(holiday.holidayId).pipe(take(1)).subscribe(() => {
      this.holidays.set(this.holidays().filter(h => h.holidayId !== holiday.holidayId));
    })
  }

  public retrieveHolidays(holidays: Holiday[]) {
    this.holidays.set(holidays)
  }
}
