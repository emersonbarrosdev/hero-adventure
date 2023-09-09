import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortalezaGorgorothComponent } from './fortaleza-gorgoroth.component';

describe('FortalezaGorgorothComponent', () => {
  let component: FortalezaGorgorothComponent;
  let fixture: ComponentFixture<FortalezaGorgorothComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FortalezaGorgorothComponent]
    });
    fixture = TestBed.createComponent(FortalezaGorgorothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
