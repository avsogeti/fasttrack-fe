import {Component, input,} from '@angular/core';
import {Holiday} from '../../../../shared/interfaces/holiday';
import {DatePipe} from '@angular/common';
@Component({
  selector: 'app-holiday-list',
  standalone: true,
  templateUrl: './holiday-list.component.html',
  imports: [
    DatePipe
  ],
  styleUrl: './holiday-list.component.css'
})
export class HolidayListComponent {

  public holidays = input.required<Holiday[]>();

}
