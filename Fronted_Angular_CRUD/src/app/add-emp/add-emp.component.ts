import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeClass } from '../employee-class';
import { EmployeeSService } from '../employee-s.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-emp',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-emp.component.html',
  styleUrl: './add-emp.component.css'
})
export class AddEmpComponent {


  constructor(private service:EmployeeSService
    ,private router:Router
  ){}

  addEmp:EmployeeClass=new EmployeeClass(); // form data will map/store in addEmp var.

  addEmpCom()
  {
      this.service.addEmployee( this.addEmp ).subscribe(
        (v)=>{
          console.log("form data- ",v);
          this.goToEmployees();
             },
        error=>console.log(error)
    );
  }

  goToEmployees()
  {
    this.router.navigate(['/viewemployees']);

     
  }
  onSubmit()
  {
     this.addEmpCom();
  }






}
