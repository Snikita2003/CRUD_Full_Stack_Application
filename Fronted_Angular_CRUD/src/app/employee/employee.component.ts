import { Component } from '@angular/core';
import { EmployeeClass } from '../employee-class';
import { EmployeeSService } from '../employee-s.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-employee',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  ngOnInit():void{
    this.getEmps();

  }

  allemployees:EmployeeClass[]=[];
  constructor(private empservice:EmployeeSService,
    private router:Router
  ){}

  getEmps()
  {
    this.empservice.getAllEmployees().subscribe(
      v=>{
            console.log(v)
            this.allemployees=v;
         }
    )
  }

  id1:number=0;
  updateEmpMeth( id:string)
  {
      this.id1=parseInt(id);
     this.router.navigate(['updateEmp', this.id1]);
  }

  id2:number=0;
  deleteEmployee(id:string)
  {
      this.id2 =parseInt(id);
      this.empservice.deleteEmp( this.id2).subscribe
      (
         (v)=>this.router.navigate(['/viewemployees'])
      )
  }

}
