import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Megaman2Component } from './components/megaman2/megaman2.component';
import { PasswordBoardComponent } from './components/password-board/password-board.component';
import { PasswordScreenComponent } from './components/screen/password-screen/password-screen.component';
import { MarkerComponent } from './components/screen/marker/marker.component';

@NgModule({
  declarations: [
    AppComponent,
    Megaman2Component,
    PasswordBoardComponent,
    PasswordScreenComponent,
    MarkerComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
