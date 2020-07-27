import { Injectable } from '@angular/core';
import { Coordinate as xy } from 'src/app/models/coordinate.model';
import { Boss } from 'src/app/models/boss.model';

@Injectable({
  providedIn: 'root'
})
export class InitialStateService {

  public etanks(): xy {
    return new xy('A', 1);
  }

  public airman(): Boss {
    const alive = new xy('D', 2);
    const dead  = new xy('E', 3);
    const item  = ['(A) Airman', '(2) Item-2'];
    return new Boss('Airman', alive, dead, item);
  }

  public bubbleman(): Boss {
    const alive = new xy('C', 3);
    const dead  = new xy('D', 1);
    const item  = ['(B) Bubbleman'];
    return new Boss('Bubbleman', alive, dead, item);
  }

  public crashman(): Boss {
    const alive = new xy('E', 2);
    const dead  = new xy('C', 5);
    const item  = ['(C) Crashman'];
    return new Boss('Crashman', alive, dead, item);
  }

  public flashman(): Boss {
    const alive = new xy('E', 4);
    const dead  = new xy('C', 1);
    const item  = ['(F) Flashman', '(3) Item-3'];
    return new Boss('Flashman', alive, dead, item);
  }

  public heatman(): Boss {
    const alive = new xy('D', 5);
    const dead  = new xy('B', 2);
    const item  = ['(H) Heatman', '(1) Item-1'];
    return new Boss('Heatman', alive, dead, item);
  }

  public metalman(): Boss {
    const alive = new xy('E', 1);
    const dead  = new xy('E', 5);
    const item  = ['(M) Metalman'];
    return new Boss('Metalman', alive, dead, item);
  }

  public quickman(): Boss {
    const alive = new xy('C', 4);
    const dead  = new xy('B', 4);
    const item  = ['(Q) Quickman'];
    return new Boss('Quickman', alive, dead, item);
  }

  public woodman(): Boss {
    const alive = new xy('B', 5);
    const dead  = new xy('D', 3);
    const item  = ['(W) Woodman'];
    return new Boss('Woodman', alive, dead, item);
  }

}
