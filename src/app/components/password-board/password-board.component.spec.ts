import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordBoardComponent } from './password-board.component';

describe('PasswordBoardComponent', () => {
  let component: PasswordBoardComponent;
  let fixture: ComponentFixture<PasswordBoardComponent>;

  beforeEach(async(() => {
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
