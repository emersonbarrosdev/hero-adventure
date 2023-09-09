import { ElementRef, Injectable } from '@angular/core';
import { Character } from '../../models/character';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private hero: Character;
  private enemy: Character;
  private actionResults: string[] = [];
  private currentLevel: number = 1;
  private actionResultsSubject = new Subject<string[]>();

  constructor() {
    this.hero = {
      name: 'Alast',
      health: 100,
      power: 10,
      defense: 5,
      guard: false,
    };

    this.enemy = {
      name: 'Onyx',
      health: 120,
      power: 20,
      defense: 6,
    };
  }

  getActionResultsSubject() {
    return this.actionResultsSubject.asObservable();
  }

  getHero(): Character {
    return this.hero;
  }

  getEnemy(): Character {
    return this.enemy;
  }

  getActionResults(): string[] {
    return this.actionResults;
  }

  getCurrentLevel(): number {
    return this.currentLevel;
  }

  attack() {
    this.actionResultsSubject.next(this.actionResults);
    const damage = this.hero.power - this.enemy.defense;
    const attackResult = `O paladino ataca!<br>O orc perdeu ${damage} pontos de vida.<br>------------------------------------------------`;

    if (damage > 0) {
      this.enemy.health -= damage;
    }

    this.actionResults.push(attackResult);
  }

  defend() {
    this.actionResultsSubject.next(this.actionResults);
    this.hero.guard = true;
    let damage = this.enemy.power - this.hero.defense;

    if (damage > 0) {
      // Reduza o dano pela metade se o paladino estiver em modo de defesa
      if (this.hero.guard) {
        damage /= 2;
      }
      this.hero.health -= damage;
    }

    const attackResult = `O paladino está se defendendo.<br>O ataque do inimigo causa ${damage} de dano.<br>------------------------------------------------`;

    this.actionResults.push(attackResult);
  }

  flee() {
    this.actionResultsSubject.next(this.actionResults);
    const fleeResult = 'O paladino fugiu!';
    this.actionResults.push(fleeResult);
  }

}
