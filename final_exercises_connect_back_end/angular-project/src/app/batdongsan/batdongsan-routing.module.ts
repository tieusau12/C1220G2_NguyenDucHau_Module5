import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BatDongSanListComponent} from "./bat-dong-san-list/bat-dong-san-list.component";
import {BatDongSanCreateComponent} from "./bat-dong-san-create/bat-dong-san-create.component";

const routes: Routes = [{
  path: 'list',
  component: BatDongSanListComponent
},
  {
    path: 'create',
    component: BatDongSanCreateComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BatdongsanRoutingModule {
}
