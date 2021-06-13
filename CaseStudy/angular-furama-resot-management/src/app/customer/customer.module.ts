import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CustomerRoutingModule} from './customer-routing.module';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbDatepickerModule, NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import { CustomerViewComponent } from './customer-view/customer-view.component';


@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    CustomerViewComponent
  ],
  exports: [
    CustomerListComponent
  ],
    imports: [
        CommonModule,
        CustomerRoutingModule,
        ReactiveFormsModule,
        NgbPaginationModule,
        FormsModule,
        NgbDatepickerModule
    ]
})
export class CustomerModule {
}
