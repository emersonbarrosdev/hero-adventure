import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlorestaElficaComponent } from './floresta-elfica.component';

describe('FlorestaElficaComponent', () => {
  let component: FlorestaElficaComponent;
  let fixture: ComponentFixture<FlorestaElficaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlorestaElficaComponent]
    });
    fixture = TestBed.createComponent(FlorestaElficaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
