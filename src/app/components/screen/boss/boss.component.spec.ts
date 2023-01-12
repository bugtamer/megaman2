import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BossComponent } from './boss.component';

describe('BossComponent', () => {
  let component: BossComponent;
  let fixture: ComponentFixture<BossComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BossComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
