import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Megaman2Component } from './megaman2.component';

describe('Megaman2Component', () => {
  let component: Megaman2Component;
  let fixture: ComponentFixture<Megaman2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Megaman2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Megaman2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
