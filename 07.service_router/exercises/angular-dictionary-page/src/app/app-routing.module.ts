import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DictionarySearchComponent} from "./dictionary-list/dictionary-search.component";
import {DictionaryDetailComponent} from "./dictionary-detail/dictionary-detail.component";

const routes: Routes = [
  {
    path: 'dictionary/list',
    component: DictionarySearchComponent
  },
  {
    path: 'dictionary/search/:englishWord',
    component: DictionaryDetailComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
