import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableDisplayerComponent } from './table-displayer/table-displayer.component';
import { CodeDisplayerComponent } from './code-displayer/code-displayer.component';
import { Connect } from './connect.service';

@NgModule({
  declarations: [
    AppComponent,
    TableDisplayerComponent,
    CodeDisplayerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [Connect],
  bootstrap: [AppComponent]
})
export class AppModule { }
