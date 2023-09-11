import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortressGorgorothComponent } from './fortress-gorgoroth.component';

describe('FortressGorgorothComponent', () => {
  let component: FortressGorgorothComponent;
  let fixture: ComponentFixture<FortressGorgorothComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FortressGorgorothComponent]
    });
    fixture = TestBed.createComponent(FortressGorgorothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
