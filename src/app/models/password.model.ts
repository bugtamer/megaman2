import { Coordinate as xy } from './coordinate.model';
import { InitialState } from './initial-state.model';
import { Boss } from './boss.model';

export class Password {

  readonly etanks    : xy   = InitialState.etanks();
  readonly airman    : Boss = InitialState.airman();
  readonly bubbleman : Boss = InitialState.bubbleman();
  readonly crashman  : Boss = InitialState.crashman();
  readonly flashman  : Boss = InitialState.flashman()
  readonly heatman   : Boss = InitialState.heatman();
  readonly metalman  : Boss = InitialState.metalman();
  readonly quickman  : Boss = InitialState.quickman();
  readonly woodman   : Boss = InitialState.woodman();

  get compute(): Array<xy> {
    const cartesianCoordinates: Array<xy> = [ this.etanks ];
    for (let boss of this.bosses) {
      cartesianCoordinates.push(boss.xy);
    }
    return cartesianCoordinates;
  }

  incEtanks(): void {
    if (this.etanks.y < xy.Y_MAX) {
      this.etanks.next();
      for (let boss of this.bosses) {
        boss.nextCoordinate();
      }
    }
  }

  decEtanks(): void {
    if (this.etanks.y > xy.Y_MIN) {
      this.etanks.previous();
      for (let boss of this.bosses) {
        boss.previousCoordinate();
      }
    }
  }

  get currentEtanks(): number {
    const yOffset = 1;
    return this.etanks.y - yOffset;
  }

  get bosses(): Array<Boss> {
    const bosses: Array<Boss> = [];
    bosses.push( this.bubbleman );
    bosses.push( this.heatman   );
    bosses.push( this.airman    );
    bosses.push( this.woodman   );
    bosses.push( this.quickman  );
    bosses.push( this.flashman  );
    bosses.push( this.crashman  );
    bosses.push( this.metalman  );
    return bosses;
  }

}
