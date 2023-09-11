import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkMountainsComponent } from './dark-mountains.component';

describe('DarkMountainsComponent', () => {
  let component: DarkMountainsComponent;
  let fixture: ComponentFixture<DarkMountainsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DarkMountainsComponent]
    });
    fixture = TestBed.createComponent(DarkMountainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
