import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ETankComponent } from './e-tank.component';

describe('ETankComponent', () => {
  let component: ETankComponent;
  let fixture: ComponentFixture<ETankComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ETankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ETankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
