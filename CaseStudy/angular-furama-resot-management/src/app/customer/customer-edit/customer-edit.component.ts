import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Customer} from "../../model/customer";
import {CustomerService} from "../../service/customer.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerForm!: FormGroup;
  customer!: Customer;
  id: number = 0;
  submitted: boolean = false;

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getCustomer(this.id);
    });

  }

  ngOnInit(): void {
  }

  get form() {
    return this.customerForm.controls;
  }

  updateCustomer(id: number) {
    this.submitted = true;

    if (this.customerForm.invalid) {
      return;
    }

    const customer = this.customerForm.value;
    this.customerService.updateCustomer(id, customer).subscribe(() => {
      alert('Cập nhật thành công');
      this.router.navigateByUrl('/customer/list')
    }, e => {
      console.log(e);
    })
  };

  private getCustomer(id: number) {
    return this.customerService.findById(id).subscribe(customer => {
      this.customerForm = new FormGroup({
        idCustomer: new FormControl(customer.idCustomer, [Validators.required, Validators.pattern('^(KH-)\\d{4}$')]),
        name: new FormControl(customer.name, Validators.required),
        gender: new FormControl(customer.gender, Validators.required),
        dateOfBirth: new FormControl(customer.dateOfBirth , Validators.required),
        idCard: new FormControl(customer.idCard, [Validators.required, Validators.pattern('^\\d{9}$')]),
        phone: new FormControl(customer.phone, [Validators.required, Validators.pattern('^(090|091|[(]84[+][)]90|[(]84+[)]91)\\d{7}$')]),
        email: new FormControl(customer.email, [Validators.required, Validators.email]),
        address: new FormControl(customer.address, Validators.required),
        typeCustomer: new FormControl(customer.typeCustomer, Validators.required)
      });
    });
  }

  onReset() {
    this.submitted = false;
    this.customerForm.reset();
  }
}

