import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PasswordBoardComponent } from './password-board.component';

describe('PasswordBoardComponent', () => {
  let component: PasswordBoardComponent;
  let fixture: ComponentFixture<PasswordBoardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
