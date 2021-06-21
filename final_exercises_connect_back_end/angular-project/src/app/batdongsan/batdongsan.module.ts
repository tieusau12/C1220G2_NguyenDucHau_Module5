import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BatdongsanRoutingModule} from './batdongsan-routing.module';
import {BatDongSanCreateComponent} from './bat-dong-san-create/bat-dong-san-create.component';
import {ReactiveFormsModule} from "@angular/forms";
import { BatDongSanEditComponent } from './bat-dong-san-edit/bat-dong-san-edit.component';

@NgModule({
  declarations: [
    BatDongSanCreateComponent,
    BatDongSanEditComponent
  ],
  imports: [
    CommonModule,
    BatdongsanRoutingModule,
    ReactiveFormsModule
  ]
})
export class BatdongsanModule {
}
