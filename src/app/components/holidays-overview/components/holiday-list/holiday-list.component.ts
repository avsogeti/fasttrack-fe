import {Component, input, output,} from '@angular/core';
import {Holiday} from '../../../../shared/interfaces/holiday';
import {DatePipe, LowerCasePipe} from '@angular/common';

@Component({
  selector: 'app-holiday-list',
  standalone: true,
  templateUrl: './holiday-list.component.html',
  imports: [
    DatePipe,
    LowerCasePipe
  ],
  styleUrl: './holiday-list.component.css'
})
export class HolidayListComponent {

  public holidays = input.required<Holiday[]>();
  public deleteHoliday = output<Holiday>();

  public removeHoliday(holiday: Holiday) {
    this.deleteHoliday.emit(holiday);
  }
}
