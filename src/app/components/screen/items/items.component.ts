import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Password } from 'src/app/models/password.model';

@Component({
  selector: 'mm2-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {

  @Input()
  password: Password;

  @Output()
  heatmanChange: EventEmitter<any>;

  @Output()
  airmanChange: EventEmitter<any>;

  @Output()
  flashmanChange: EventEmitter<any>;

  constructor() {
    this.heatmanChange  = new EventEmitter<any>();
    this.airmanChange   = new EventEmitter<any>();
    this.flashmanChange = new EventEmitter<any>();
  }

  onHeatmanClick(): void {
    this.heatmanChange.emit();
  }

  onAirmanClick(): void {
    this.airmanChange.emit();
  }

  onFlashmanClick(): void {
    this.flashmanChange.emit();
  }

}
