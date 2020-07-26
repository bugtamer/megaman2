import { Component } from '@angular/core';
import { Password } from 'src/app/models/password.model';
import { Coordinate } from 'src/app/models/coordinate.model';

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

  get isIncButtonDisable(): boolean {
    const yMax = Coordinate.Y_MAX - 1;
    const isLessThanUpperLimit = (this.password.currentEtanks < yMax);
    return ! isLessThanUpperLimit;
  }

  get isDecButtonDisable(): boolean {
    const yMin = Coordinate.Y_MIN - 1;
    const isGreaterThanLowerLimit = (this.password.currentEtanks > yMin);
    return ! isGreaterThanLowerLimit;
  }

}
