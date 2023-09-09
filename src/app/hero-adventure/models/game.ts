import { Character } from './character';

export class Game {
  hero: Character;
  enemy: Character;
  actionResults: string[] = [];
  currentLevel: number = 1;

  constructor() {
    this.hero = {
      name: "Alast",
      health: 100,
      power: 10,
      defense: 5,
      guard: false,
    };

    this.enemy = {
      name: "Onyx",
      health: 120,
      power: 20,
      defense: 6,
    };
  }

  Attack() {
    const damage = this.hero.power - this.enemy.defense;
    const attackResult = `O paladino ataca!<br>O orc perdeu ${damage} pontos de vida.<br>
    ------------------------------------------------`;


    if (damage > 0) {
      this.enemy.health -= damage;
    }

    this.actionResults.push(attackResult);
  }

  Defend() {
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


  Flee() {
    const fleeResult = "O paladino fugiu!";
    this.actionResults.push(fleeResult);
  }

}
