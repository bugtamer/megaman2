import { Component, AfterViewInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'mm2-e-tank',
  templateUrl: './e-tank.component.html',
  styleUrls: ['./e-tank.component.css']
})
export class ETankComponent implements AfterViewInit {

  @Input()
  etank: string;

  @Input()
  currentEtank: string;

  @Input()
  x: string;

  @Input()
  y: string;

  @Output()
  change: EventEmitter<number>;

  @ViewChild('etank')
  etankRef: ElementRef<HTMLSpanElement>

  constructor() {
    this.change = new EventEmitter<number>();
  }

  ngAfterViewInit(): void {
    this.setImageXY();
  }

  get isNotSelected(): boolean {
    return this.etank != this.currentEtank;
  }

  get label(): string {
    return `${this.etank} E-tanks`;
  }

  get quantityImage(): string {
    return `assets/img/numbers/${this.etank}.png`;
  }

  onSelect(): void {
    this.change.emit(+this.etank);
  }

  private setImageXY(): void {
    if (this.isReady) {
      this.etankRef.nativeElement.style.top  = this.y + 'px';
      this.etankRef.nativeElement.style.left = this.x + 'px';
    }
  }

  private get isReady(): boolean {
    return this.etankRef !== undefined &&
           this.etankRef.nativeElement !== undefined;
  }
}
