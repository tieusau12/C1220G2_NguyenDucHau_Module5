import {Component, OnInit} from '@angular/core';
import {Customer} from "../../model/customer";
import {CustomerService} from "../../service/customer.service";
import {CustomerTypeService} from "../../service/customer-type.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../../model/customer-type";

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {
  customerForm!: FormGroup;
  customerTypes: CustomerType[] = [];
  id: number = 0;

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getCustomer(this.id);
    });
  }

  ngOnInit(): void {
   this.getAllCustomerType()
  }


  private getCustomer(id: number) {
    return this.customerService.findById(id).subscribe(customer => {
      this.customerForm = new FormGroup({
        idCustomer: new FormControl(customer.idCustomer, [Validators.required, Validators.pattern('^(KH-)\\d{4}$')]),
        name: new FormControl(customer.name, Validators.required),
        gender: new FormControl(customer.gender, Validators.required),
        dateOfBirth: new FormControl(customer.dateOfBirth, Validators.required),
        idCard: new FormControl(customer.idCard, [Validators.required, Validators.pattern('^\\d{9}$')]),
        phone: new FormControl(customer.phone, [Validators.required, Validators.pattern('^(090|091|[(]84[+][)]90|[(]84+[)]91)\\d{7}$')]),
        email: new FormControl(customer.email, [Validators.required, Validators.email]),
        address: new FormControl(customer.address, Validators.required),
        customerType: new FormControl(customer.customerType, Validators.required)
      });
    });
  }

  onReset() {
    this.router.navigateByUrl('/customer/list')
  }

  getAllCustomerType() {
    this.customerTypeService.getAll().subscribe(customerTypes => {
      this.customerTypes = customerTypes;
    })
  }

}
