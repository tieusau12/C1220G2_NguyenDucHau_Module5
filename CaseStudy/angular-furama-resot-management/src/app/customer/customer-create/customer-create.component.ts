import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../service/customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerForm!: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.customerForm = this.formBuilder.group({
      idCustomer: ['', [Validators.required, Validators.pattern('^(KH-)\\d{4}$')]],
      name: ['', Validators.required],
      gender: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      idCard: ['', [Validators.required, Validators.pattern('^\\d{9}$')]],
      phone: ['', [Validators.required, Validators.pattern('^(090|091|[(]84[+][)]90|[(]84+[)]91)\\d{7}$')]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      typeCustomer: ['', Validators.required]
    })
  }

  get form() {
    return this.customerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.customerForm.invalid) {
      return;
    }
    const customer = this.customerForm.value;
    this.customerService.saveCustomer(customer).subscribe(() => {
      this.router.navigateByUrl('/customer/list');
    });

  }

  onReset() {
    this.submitted = false;
    this.customerForm.reset();
  }
}
