import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BossScreenComponent } from './boss-screen.component';

describe('BossScreenComponent', () => {
  let component: BossScreenComponent;
  let fixture: ComponentFixture<BossScreenComponent>;

  beforeEach(waitForAsync(() => {
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
