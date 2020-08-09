import { Component, AfterViewInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { Boss } from 'src/app/models/boss.model';

@Component({
  selector: 'mm2-boss',
  templateUrl: './boss.component.html',
  styleUrls: ['./boss.component.css']
})
export class BossComponent implements AfterViewInit {

  @Input()
  boss: Boss;

  @Output()
  change: EventEmitter<any>;

  @Input()
  x: string;

  @Input()
  y: string;

  @ViewChild('boss', {static: false})
  bossRef: ElementRef<HTMLImageElement>;

  // LIFE CYCLE

  constructor() {
    this.change = new EventEmitter<any>();
  }

  ngAfterViewInit(): void {
    this.setImageXY();
  }

  get isDefeated(): boolean {
    return this.boss.isDefeated;
  }

  get url(): string {
    const bossName = this.boss.name.toLowerCase();
    return `/assets/img/bosses/${bossName}.png`;
  }

  onClick(): void {
    this.change.emit();
  }

  // LOWER LEVEL IMPLEMENTATION DETAILS

  private setImageXY(): void {
    if (this.isReady) {
      this.bossRef.nativeElement.style.top  = this.y + 'px';
      this.bossRef.nativeElement.style.left = this.x + 'px';
    }
  }

  private get isReady(): boolean {
    return this.bossRef !== undefined &&
           this.bossRef.nativeElement !== undefined;
  }

}
