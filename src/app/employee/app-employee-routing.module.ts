import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {CreateEmployeeComponent} from './create-employee/create-employee.component';
import {UpdateEmployeeComponent} from './update-employee/update-employee.component';
import {EmployeeDetailsComponent} from './employee-details/employee-details.component';

const routes: Routes = [
  {path: '', redirectTo: '/employee/list', pathMatch: 'full'},
  {path: 'employee/list', component: EmployeeListComponent},
  {path: 'employee/add', component: CreateEmployeeComponent},
  {path: 'employee/update/:id', component: UpdateEmployeeComponent},
  {path: 'employee/details/:id', component: EmployeeDetailsComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppEmployeeRoutingModule {
}
