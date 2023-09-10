import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElfForestComponent } from './elf-forest.component';

describe('ElfForestComponent', () => {
  let component: ElfForestComponent;
  let fixture: ComponentFixture<ElfForestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElfForestComponent]
    });
    fixture = TestBed.createComponent(ElfForestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
