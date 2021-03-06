import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-list',
  // templateUrl: './employee-list.component.html',
  template:`
    <h2>Employee-list</h2>
    <ul *ngFor="let employee of employees">
        <li>{{employee.name}}</li>
    </ul>

  `,
  // styleUrls: ['./employee-list.component.css']
  styles: []
})
export class EmployeeListComponent implements OnInit {
  public employees = [

  ]

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employees = this._employeeService.getEmployees()
  }

}
