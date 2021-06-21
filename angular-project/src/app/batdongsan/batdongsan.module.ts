import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BatdongsanRoutingModule} from './batdongsan-routing.module';
import {BatDongSanCreateComponent} from './bat-dong-san-create/bat-dong-san-create.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    BatDongSanCreateComponent
  ],
  imports: [
    CommonModule,
    BatdongsanRoutingModule,
    ReactiveFormsModule
  ]
})
export class BatdongsanModule {
}
