import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DictionarySearchComponent } from './dictionary-list/dictionary-search.component';
import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DictionarySearchComponent,
    DictionaryDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
