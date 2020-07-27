import { Injector } from '@angular/core';
import { InitialStateService } from '../services/initial-state/initial-state.service';
import { Coordinate as xy } from './coordinate.model';
import { Boss } from './boss.model';

const INJECTOR = Injector.create({providers: [{provide: InitialStateService, deps: []}]});

export class Password {

  private initialState: InitialStateService = INJECTOR.get(InitialStateService);

  readonly etanks    : xy   = this.initialState.etanks();
  readonly airman    : Boss = this.initialState.airman();
  readonly bubbleman : Boss = this.initialState.bubbleman();
  readonly crashman  : Boss = this.initialState.crashman();
  readonly flashman  : Boss = this.initialState.flashman()
  readonly heatman   : Boss = this.initialState.heatman();
  readonly metalman  : Boss = this.initialState.metalman();
  readonly quickman  : Boss = this.initialState.quickman();
  readonly woodman   : Boss = this.initialState.woodman();

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
