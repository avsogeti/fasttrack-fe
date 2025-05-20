import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../interfaces/employee';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {}

  public createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>('http://localhost:8080/employees', employee)
  }
}
