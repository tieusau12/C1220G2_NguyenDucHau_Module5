import {Component, Input, OnInit} from '@angular/core';
import {Customer} from "../../model/customer";
import {CustomerService} from "../../service/customer.service";

import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  page = 3;
  pageSize = 5;
  collectionSize: number = 0;
  closeResult: string = '';

  constructor(private customerService: CustomerService,
              private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    this.customerService.getAll().subscribe(customers => {
      this.customers = customers;
      this.collectionSize = this.customers.length;
    });
  }

  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id).subscribe(() => {
      this.getAll();
    }, e => {
      console.log(e);
    });
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    })
  }


}
