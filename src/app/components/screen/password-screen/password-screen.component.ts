import { Component, Input } from '@angular/core';
import { Password } from 'src/app/models/password.model';

@Component({
  selector: 'mm2-password-screen',
  templateUrl: './password-screen.component.html',
  styleUrls: ['./password-screen.component.css']
})
export class PasswordScreenComponent {

  @Input()
  password: Password;

}
