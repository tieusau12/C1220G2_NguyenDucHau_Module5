import {Component, OnInit} from '@angular/core';
import {Customer} from "../customer";

const CUSTOMERS: Customer[] = [
  {
    idCustomer: 'KH-1111',
    name: 'Nguyễn Đức Hậu',
    gender: 'Male',
    dateOfBirth: '06/04/2005',
    idCard: 201732015,
    phone: '0772785771',
    email: 'duchau@gmail.com',
    address: 'Đà Nẵng',
    typeCustomer: 'Diamond'
  },
  {
    idCustomer: 'KH-2222',
    name: 'Nguyễn Đức Hậu',
    gender: 'Male',
    dateOfBirth: '06/04/2005',
    idCard: 201732015,
    phone: '0772785411',
    email: 'duchau@gmail.com',
    address: 'Đà Nẵng',
    typeCustomer: 'Diamond'
  },
  {
    idCustomer: 'KH-2222',
    name: 'Nguyễn Đức Hậu',
    gender: 'Male',
    dateOfBirth: '06/04/2005',
    idCard: 201732015,
    phone: '0772785411',
    email: 'duchau@gmail.com',
    address: 'Đà Nẵng',
    typeCustomer: 'Diamond'
  },{
    idCustomer: 'KH-2222',
    name: 'Nguyễn Đức Hậu',
    gender: 'Male',
    dateOfBirth: '06/04/2005',
    idCard: 201732015,
    phone: '0772785411',
    email: 'duchau@gmail.com',
    address: 'Đà Nẵng',
    typeCustomer: 'Diamond'
  },{
    idCustomer: 'KH-2222',
    name: 'Nguyễn Đức Hậu',
    gender: 'Male',
    dateOfBirth: '06/04/2005',
    idCard: 201732015,
    phone: '0772785411',
    email: 'duchau@gmail.com',
    address: 'Đà Nẵng',
    typeCustomer: 'Diamond'
  },{
    idCustomer: 'KH-2222',
    name: 'Nguyễn Đức Hậu',
    gender: 'Male',
    dateOfBirth: '06/04/2005',
    idCard: 201732015,
    phone: '0772785411',
    email: 'duchau@gmail.com',
    address: 'Đà Nẵng',
    typeCustomer: 'Diamond'
  },{
    idCustomer: 'KH-2222',
    name: 'Nguyễn Đức Hậu',
    gender: 'Male',
    dateOfBirth: '06/04/2005',
    idCard: 201732015,
    phone: '0772785411',
    email: 'duchau@gmail.com',
    address: 'Đà Nẵng',
    typeCustomer: 'Diamond'
  },{
    idCustomer: 'KH-2222',
    name: 'Nguyễn Đức Hậu',
    gender: 'Male',
    dateOfBirth: '06/04/2005',
    idCard: 201732015,
    phone: '0772785411',
    email: 'duchau@gmail.com',
    address: 'Đà Nẵng',
    typeCustomer: 'Diamond'
  }
];

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  customer: Customer = {};
  customers: Customer[] = [];
  page = 1;
  pageSize = 4;
  collectionSize = CUSTOMERS.length;

  constructor() {
    this.refreshCustomers()
  }

  ngOnInit(): void {
  }

  addNewCustomer() {
    this.customers.push(this.customer);
  }

  refreshCustomers() {
    this.customers = CUSTOMERS
      .map((customer, i) => ({id: i + 1, ...customer}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}
