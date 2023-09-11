import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-adventure',
  templateUrl: './hero-adventure.component.html',
  styleUrls: ['./hero-adventure.component.scss']
})
export class HeroAdventureComponent {
  start: boolean = false;

  constructor( private router: Router) {}

  startGame() {
    this.router.navigate(['/mythical-forest'])
  }

}
