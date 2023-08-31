import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit{
  id!:number
  employee!: Employee
  loginUser = {
    username: '',
    password :''
  }
  username = ""
  msg = "";
  IsInValid = false;
  constructor(private route: ActivatedRoute,
    private employeService: EmployeeService, private router: Router) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'] ;

    this.employee = new Employee();
    this.employeService.getEmployeeById(this.id).subscribe( data => {
      this.employee = data;
    });
  }
  login() {
    console.log('loginUser :',this.loginUser)
    if (this.loginUser.username == "admin" && this.loginUser.password == "admin") {
      this.router.navigate(['/menu'])
    }
    else {
      this.msg = "invalid username or password"
      this.IsInValid = true;
    }
  }
  pharmacyCard(id: number){
    this.router.navigate(['pharmacy-card',id]);
  }
}
