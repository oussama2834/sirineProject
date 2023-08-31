import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule}from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule}from '@angular/common/http'
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { PharmacyCardComponent } from './pharmacy-card/pharmacy-card.component';
import { ClientsComponent } from './clients/clients.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeLoginComponent,
    PharmacyCardComponent,
    ClientsComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
   AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
