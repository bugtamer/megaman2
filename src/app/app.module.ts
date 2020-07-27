import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Megaman2Component } from './components/megaman2/megaman2.component';
import { PasswordBoardComponent } from './components/password-board/password-board.component';

@NgModule({
  declarations: [
    AppComponent,
    Megaman2Component,
    PasswordBoardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
