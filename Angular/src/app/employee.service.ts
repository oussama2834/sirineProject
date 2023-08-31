import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';



@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private API_URL = 'http://localhost:8080/api/v1/employees';

  constructor(private httpClient: HttpClient) {}

  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.API_URL}`);
  }

  createEmployee(employee: Employee): Observable<any> {
    return this.httpClient.post(`${this.API_URL}`, employee);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.API_URL}/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object> {
    return this.httpClient.put(`${this.API_URL}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.API_URL}/${id}`);
  }
 
  


}
