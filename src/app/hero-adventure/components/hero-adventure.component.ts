import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-adventure',
  templateUrl: './hero-adventure.component.html',
  styleUrls: ['./hero-adventure.component.scss']
})
export class HeroAdventureComponent {
  start: boolean = false;

  startGame() {
    this.start = true;
  }

}
