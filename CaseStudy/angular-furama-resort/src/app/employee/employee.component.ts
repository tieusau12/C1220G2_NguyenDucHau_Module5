import {Component, OnInit} from '@angular/core';
import {Employee} from "../employee";

const EMPLOYEES: Employee[] = [
  {
    idEmployee: 'NV-1111',
    name: 'Nguyen Duc Hau',
    gender: 'Male',
    dateOfBirth: '06/04/2005',
    idCard: 201732015,
    phone: '0772785499',
    salary: 7000,
    email: 'duchau@gmail.com',
    address: 'Đà Nẵng',
    level: 'Doctor',
    position: 'Director',
    humanResource: 'Kitchen'
  }, {
    idEmployee: 'NV-2222',
    name: 'Lê Đức Sang',
    gender: 'Male',
    dateOfBirth: '06/04/1991',
    idCard: 201734455,
    phone: '0772785999',
    salary: 8000,
    email: 'sangle@gmail.com',
    address: 'Quảng Nam',
    level: 'Doctor',
    position: 'Director',
    humanResource: 'Kitchen'
  },
  {
    idEmployee: 'NV-2222',
    name: 'Lê Đức Sang',
    gender: 'Male',
    dateOfBirth: '06/04/1991',
    idCard: 201734455,
    phone: '0772785999',
    salary: 8000,
    email: 'sangle@gmail.com',
    address: 'Quảng Nam',
    level: 'Doctor',
    position: 'Director',
    humanResource: 'Kitchen'
  },
  {
    idEmployee: 'NV-2222',
    name: 'Lê Đức Sang',
    gender: 'Male',
    dateOfBirth: '06/04/1991',
    idCard: 201734455,
    phone: '0772785999',
    salary: 8000,
    email: 'sangle@gmail.com',
    address: 'Quảng Nam',
    level: 'Doctor',
    position: 'Director',
    humanResource: 'Kitchen'
  },
  {
    idEmployee: 'NV-2222',
    name: 'Lê Đức Sang',
    gender: 'Male',
    dateOfBirth: '06/04/1991',
    idCard: 201734455,
    phone: '0772785999',
    salary: 8000,
    email: 'sangle@gmail.com',
    address: 'Quảng Nam',
    level: 'Doctor',
    position: 'Director',
    humanResource: 'Kitchen'
  }
];

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee: Employee = {};
  employees: Employee[] = [];
  page = 1;
  pageSize = 4;
  collectionSize = EMPLOYEES.length;

  constructor() {
    this.refreshEmployee()
  }

  ngOnInit(): void {
  }

  addNewEmployee() {
    this.employees.push(this.employee);
  }

  refreshEmployee() {
    this.employees = EMPLOYEES
      .map((employee, i) => ({id: i + 1, ...employee}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
