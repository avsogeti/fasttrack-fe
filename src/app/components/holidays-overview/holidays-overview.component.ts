import {Component, signal} from '@angular/core';
import {CreateEmployeeComponent} from './components/create-employee/create-employee.component';
import {HolidayListComponent} from './components/holiday-list/holiday-list.component';
import {CreateHolidayComponent} from './components/create-holiday/create-holiday.component';
import {Holiday} from '../../shared/interfaces/holiday';

@Component({
  selector: 'app-holidays-overview',
  standalone: true,
  templateUrl: './holidays-overview.component.html',
  styleUrl: './holidays-overview.component.css',
  imports: [
    CreateEmployeeComponent,
    HolidayListComponent,
    CreateHolidayComponent
  ]
})
export class HolidaysOverviewComponent {

  public holidays = signal<Holiday[]>([]);
  constructor() {
  }

  addHoliday(holiday: Holiday[]) {
    this.holidays.set(holiday);
  }
}
