import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Holiday} from '../interfaces/holiday';


@Injectable({
  providedIn: 'root'
})
export class HolidayService {

  #httpClient = inject(HttpClient);

  public getHolidays$(): Observable<Holiday[]> {
    return this.#httpClient.get<Holiday[]>(`http://localhost:8080/holidays`);
  }

  public getHolidaysByEmployeeID$(employeeId: string): Observable<Holiday[]> {
    return this.#httpClient.get<Holiday[]>(`http://localhost:8080/holidays/${employeeId}`);
  }

  public createHoliday$(holiday: Holiday): Observable<Holiday> {
    return this.#httpClient.post<Holiday>('http://localhost:8080/holidays', holiday)
  }

  public deleteHoliday$(holidayId: String): Observable<object> {
    return this.#httpClient.delete(`http://localhost:8080/holidays/${holidayId}`);
  }
}
