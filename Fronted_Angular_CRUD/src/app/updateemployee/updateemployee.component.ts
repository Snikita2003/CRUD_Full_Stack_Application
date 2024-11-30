import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EmployeeClass } from '../employee-class';
import { EmployeeSService } from '../employee-s.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-updateemployee',
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './updateemployee.component.html',
  styleUrl: './updateemployee.component.css'
})
export class UpdateemployeeComponent {

  constructor(private s:EmployeeSService,
    private route:ActivatedRoute,
    private router:Router
  ){}

  employee:EmployeeClass=new EmployeeClass();
  id:number=0;

  updateCall()
  {
    this.id= this.route.snapshot.params['id'];
      this.s.getSingleEmployee( this.id ).subscribe(
         v=>this.employee=v,
         e=>console.log(e)
      )
     
      
  }

  onSubmit()
  {
      this.s.updateEmp(this.id,this.employee).subscribe
      (
        d=>  this.router.navigate(['/viewemployees'])
      )
  }



}
