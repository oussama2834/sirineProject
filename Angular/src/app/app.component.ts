import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
//import{MatDialog}from '@angular/material/dialog';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pharmacy';
  displayedColumns=['emailId','firstName','lastName']
  data=[];
  constructor(private http:HttpClient) {

  }
  ngOnInit(): void {
    this.http.get<any>('http://localhost:8080/api/v1/employees').subscribe({ next:data=>{
this.data=data;
    },
    error:error=>
    console.error('there was an error !',error)
  }
  )
   
  }
}
