import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Megaman2Component } from './components/megaman2/megaman2.component';
import { PasswordBoardComponent } from './components/password-board/password-board.component';
import { PasswordScreenComponent } from './components/screen/password-screen/password-screen.component';
import { MarkerComponent } from './components/screen/marker/marker.component';
import { BossScreenComponent } from './components/screen/boss-screen/boss-screen.component';
import { BossComponent } from './components/screen/boss/boss.component';
import { ETankComponent } from './components/screen/e-tank/e-tank.component';
import { ItemsComponent } from './components/screen/items/items.component';

@NgModule({
  declarations: [
    AppComponent,
    Megaman2Component,
    PasswordBoardComponent,
    PasswordScreenComponent,
    MarkerComponent,
    BossScreenComponent,
    BossComponent,
    ETankComponent,
    ItemsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
