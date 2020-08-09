import { Component, Input } from '@angular/core';
import { Password } from 'src/app/models/password.model';

@Component({
  selector: 'mm2-boss-screen',
  templateUrl: './boss-screen.component.html',
  styleUrls: ['./boss-screen.component.css']
})
export class BossScreenComponent {

  @Input()
  password: Password;

}
