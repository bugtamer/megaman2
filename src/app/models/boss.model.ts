import { Coordinate as xy } from './coordinate.model';

type bossname = 'Airman' | 'Bubbleman' | 'Crashman' | 'Flashman' | 'Heatman' | 'Metalman' | 'Quickman' | 'Woodman';

export class Boss {

  public isDefeated: boolean;
  public  readonly name:  bossname;
  public  readonly item:  Array<string>;
  private readonly alive: xy;
  private readonly dead:  xy;

  constructor(name: bossname, alive: xy, dead: xy, item: Array<string>) {
    this.isDefeated = false;
    this.name  = name;
    this.alive = alive;
    this.dead  = dead;
    this.item  = item;
  }

  nextCoordinate(): void {
    this.alive.next();
    this.dead .next();
  }

  previousCoordinate(): void {
    this.alive.previous();
    this.dead .previous();
  }

  toggleIsDefeated(): void {
    this.isDefeated = !this.isDefeated;
  }

  get index(): number {
    return this.xy.toIndex;
  }

  get xy(): xy {
    return this.isDefeated ? this.dead : this.alive;
  }

}
