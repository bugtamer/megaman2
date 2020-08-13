import { Component } from '@angular/core';
import { Password } from 'src/app/models/password.model';

@Component({
  selector: 'mm2-megaman2',
  templateUrl: './megaman2.component.html',
  styleUrls: ['./megaman2.component.css']
})
export class Megaman2Component {

  password: Password;

  constructor() {
    this.password = new Password();
  }

  get passwordCoordinates(): Array<string> {
    const coords: Array<string> = [];
    for (let coordinate of this.password.compute) {
      coords.push(coordinate.xy);
    }
    return coords;
  }

  setEtanks(etanks: number): void {
    const isIncrement = (etanks > this.password.currentEtanks);
    let pendingChanges = Math.abs(this.password.currentEtanks - etanks);
    console.debug('etanks', etanks);
    console.debug('isIncrement', isIncrement);
    console.debug('pendingChanges', pendingChanges);
    while (pendingChanges-- > 0) {
      if (isIncrement) {
        this.password.incEtanks();
        console.debug('inc');
      } else {
        this.password.decEtanks();
        console.debug('dec');
      }
    }
  }

}
