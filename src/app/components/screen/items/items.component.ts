import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Password } from 'src/app/models/password.model';
import { environment } from 'src/environments/environment';

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

  get heatmanUrl(): string {
    return environment.imageBasePath + 'items/item-1.png';
  }

  get airmanUrl(): string {
    return environment.imageBasePath + 'items/item-2.png';
  }

  get flashmanUrl(): string {
    return environment.imageBasePath + 'items/item-3.png';
  }

}
