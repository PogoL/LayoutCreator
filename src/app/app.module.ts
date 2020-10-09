import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableDisplayerComponent } from './table-displayer/table-displayer.component';
import { CodeDisplayerComponent } from './code-displayer/code-displayer.component';

@NgModule({
  declarations: [
    AppComponent,
    TableDisplayerComponent,
    CodeDisplayerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
