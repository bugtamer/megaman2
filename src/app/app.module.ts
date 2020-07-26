import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Megaman2Component } from './components/megaman2/megaman2.component';

@NgModule({
  declarations: [
    AppComponent,
    Megaman2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
