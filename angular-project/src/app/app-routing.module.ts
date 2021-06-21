import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BatDongSanListComponent} from "./batdongsan/bat-dong-san-list/bat-dong-san-list.component";

const routes: Routes = [
  {
    path: 'batdongsan',
    loadChildren: () => import('./batdongsan/batdongsan.module').then(module => module.BatdongsanModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
