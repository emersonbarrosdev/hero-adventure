import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MontanhasSombriasDComponent } from './montanhas-sombrias-d.component';

describe('MontanhasSombriasDComponent', () => {
  let component: MontanhasSombriasDComponent;
  let fixture: ComponentFixture<MontanhasSombriasDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MontanhasSombriasDComponent]
    });
    fixture = TestBed.createComponent(MontanhasSombriasDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
