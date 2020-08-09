import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BossScreenComponent } from './boss-screen.component';

describe('BossScreenComponent', () => {
  let component: BossScreenComponent;
  let fixture: ComponentFixture<BossScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BossScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BossScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
