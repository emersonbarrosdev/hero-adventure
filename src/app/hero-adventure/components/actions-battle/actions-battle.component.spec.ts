import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsBattleComponent } from './actions-battle.component';

describe('ActionsBattleComponent', () => {
  let component: ActionsBattleComponent;
  let fixture: ComponentFixture<ActionsBattleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionsBattleComponent]
    });
    fixture = TestBed.createComponent(ActionsBattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
