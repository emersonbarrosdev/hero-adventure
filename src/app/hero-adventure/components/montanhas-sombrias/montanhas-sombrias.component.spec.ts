import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MontanhasSombriasComponent } from './montanhas-sombrias.component';

describe('MontanhasSombriasDComponent', () => {
  let component: MontanhasSombriasComponent;
  let fixture: ComponentFixture<MontanhasSombriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MontanhasSombriasComponent]
    });
    fixture = TestBed.createComponent(MontanhasSombriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
