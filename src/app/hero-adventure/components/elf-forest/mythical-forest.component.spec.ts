import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MythicalForestComponent } from './mythical-forest.component';

describe('ElfForestComponent', () => {
  let component: MythicalForestComponent;
  let fixture: ComponentFixture<MythicalForestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MythicalForestComponent]
    });
    fixture = TestBed.createComponent(MythicalForestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
