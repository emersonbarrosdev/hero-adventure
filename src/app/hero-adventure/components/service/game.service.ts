import { Injectable } from '@angular/core';
import { Character } from '../../models/character';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private hero: Character;
  private enemy: Character;
  actionResults: string[] = [];
  currentLevel: number = 1;
  gameStarted = false;

  constructor() {
    this.initializeGame();
  }

  initializeGame() {
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

    this.actionResults = [];
    this.currentLevel = 1;
    this.gameStarted = false;
  }

  addActionResult(message: string) {
    this.actionResults.push(message);
  }

  // Implemente os métodos de Atacar, Defender e Fugir aqui
  attack() {
    // Lógica de ataque
  }

  defend() {
    // Lógica de defesa
  }

  flee() {
    // Lógica de fuga
  }
}
