import { Component, Input, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { Coordinate } from 'src/app/models/coordinate.model';

const IMAGE_X_OFFSET = 173;
const IMAGE_Y_OFFSET =  69;
const SEPARATION     =  16;
const A_CHAR_CODE    =  65;

@Component({
  selector: 'mm2-marker',
  templateUrl: './marker.component.html',
  styleUrls: ['./marker.component.css']
})
export class MarkerComponent implements OnChanges {

  @Input()
  xy: Coordinate;

  @ViewChild('marker')
  markerRef: ElementRef<HTMLImageElement>;

  ngOnChanges(changes: SimpleChanges): void {
    this.putMarker();
  }

  // LOWER LEVEL IMPLEMENTATION DETAILS

  private putMarker(): void {
    if (this.isReady) {
      this.markerRef.nativeElement.style.top  = `${this.x}px`;
      this.markerRef.nativeElement.style.left = `${this.y}px`;
    }
  }

  private get x(): number {
    const x = this.xy.x.charCodeAt(0) - A_CHAR_CODE;
    return IMAGE_X_OFFSET + SEPARATION * x;
  }

  private get y(): number {
    const y = this.xy.y - 1;
    return IMAGE_Y_OFFSET + SEPARATION * y;
  }

  private get isReady(): boolean {
    return this.markerRef !== undefined &&
           this.markerRef.nativeElement !== undefined;
  }

}
