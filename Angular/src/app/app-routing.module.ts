import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component'; // Assurez-vous que le chemin est correct
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { PharmacyCardComponent } from './pharmacy-card/pharmacy-card.component';
import { ClientsComponent } from './clients/clients.component';
import { MenuComponent } from './menu/menu.component';
const routes: Routes = [
  { path: '', redirectTo: 'employee-login', pathMatch: 'full' },
  {path: 'employee-login',component: EmployeeLoginComponent},
  {
    path: 'menu', component: MenuComponent, children: [
      {path:'',redirectTo:'employees',pathMatch:'full'},
      {path:'employees',component:EmployeeListComponent},
      {path:'update-employee/:id',component: UpdateEmployeeComponent},
      {path: 'employee-details/:id',component: EmployeeDetailsComponent},
      {path: 'pharmacy-card/:id',component: PharmacyCardComponent},
      { path: 'clients', component: ClientsComponent },
      {path:'create-employees',component: CreateEmployeeComponent},
  ]},


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
