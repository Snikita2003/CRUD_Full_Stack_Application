import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AppComponent } from './app.component';
import { empty } from 'rxjs';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';

export const routes: Routes = [


    {path:'viewemployees', component:EmployeeComponent}
    ,{path:'addemployee', component:AddEmpComponent},
    {path:'',redirectTo:'viewemployees',pathMatch:'full'}
    ,{path:'updateEmp/:id',component:UpdateemployeeComponent}
    



];
