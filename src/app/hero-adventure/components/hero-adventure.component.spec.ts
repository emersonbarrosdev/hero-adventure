import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroAdventureComponent } from './hero-adventure.component';

describe('HeroAdventureComponent', () => {
  let component: HeroAdventureComponent;
  let fixture: ComponentFixture<HeroAdventureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroAdventureComponent]
    });
    fixture = TestBed.createComponent(HeroAdventureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
