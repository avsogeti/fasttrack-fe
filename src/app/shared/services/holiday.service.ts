import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Holiday} from '../interfaces/holiday';


@Injectable({
  providedIn: 'root'
})
export class HolidayService {

  constructor(private http: HttpClient) {}

  public getHolidaysByEmployeeID(employeeId: string): Observable<Holiday[]> {
    return this.http.get<Holiday[]>(`http://localhost:8080/holidays/${employeeId}`);
  }

  public createHoliday(holiday: Holiday): Observable<Holiday> {
    return this.http.post<Holiday>('http://localhost:8080/holidays', holiday)
  }

  public deleteHoliday(holidayId: String) {
    return this.http.delete(`http://localhost:8080/holidays/${holidayId}`);
  }
}
