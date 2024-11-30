import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router'; // Import router-related modules
import { EmployeeComponent } from './employee/employee.component'; // Import EmployeeComponent
import { AddEmpComponent } from './add-emp/add-emp.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule, EmployeeComponent ,UpdateemployeeComponent, AddEmpComponent], // Import RouterModule and EmployeeComponent
  templateUrl: './app.component.html', // Correct the templateUrl (no changes)
  styleUrls: ['./app.component.css'], // Correct the styleUrl to styleUrls (plural)
})
export class AppComponent {
  title = 'emp';
}
