import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeClass } from './employee-class';

@Injectable({
  providedIn: 'root'
})
export class EmployeeSService {

  constructor(private http:HttpClient) { }

  url:string="http://localhost:8080/api/employees";

  
  getAllEmployees():Observable<EmployeeClass[]>{

    return this.http.get<EmployeeClass[]>(`${this.url}`);
  }

  addEmployee(employee:EmployeeClass):Observable<Object>{

    return this.http.post(`${this.url}`,employee);
  }


  getSingleEmployee(id:number):Observable<EmployeeClass>{

    return this.http.get<EmployeeClass>(`${this.url}/${id}`);
  }

  updateEmp(id:number,employess:EmployeeClass):Observable<Object>{
    return this.http.put(`${this.url}/${id}`,employess);

  }

  deleteEmp(id:number):Observable<Object>{
    return this.http.delete(`${this.url}/${id}`);
  }
}
