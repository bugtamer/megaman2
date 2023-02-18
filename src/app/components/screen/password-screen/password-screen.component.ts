import { Component, Input } from '@angular/core';
import { Password } from 'src/app/models/password.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'mm2-password-screen',
  templateUrl: './password-screen.component.html',
  styleUrls: ['./password-screen.component.css']
})
export class PasswordScreenComponent {

  @Input()
  password: Password;

  setEtanks(etanks: number): void {
    const isIncrement = (etanks > this.password.currentEtanks);
    let pendingChanges = Math.abs(this.password.currentEtanks - etanks);
    while (pendingChanges-- > 0) {
      if (isIncrement) {
        this.password.incEtanks();
      } else {
        this.password.decEtanks();
      }
    }
  }

  get url(): string {
    return environment.imageBasePath + 'screen.png';
  }

}
