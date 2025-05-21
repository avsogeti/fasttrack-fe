import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../interfaces/employee';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  #httpClient = inject(HttpClient);

  public createEmployee$(employee: Employee): Observable<Employee> {
    return this.#httpClient.post<Employee>('http://localhost:8080/employees', employee)
  }
}
