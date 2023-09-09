import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CharacterModel } from '../../models/characterModel';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private hero: CharacterModel;
  private enemy: CharacterModel;
  private actionResults: string[] = [];
  private currentLevel: number = 1;
  private actionResultsSubject = new Subject<string[]>();
  private orcIsDead: boolean = false;
  private isHeroTurn: boolean = true;
  private isGameOver: boolean = false;

  constructor() {
    this.hero = new CharacterModel('Alast', 100, 10, 5, false);
    this.enemy = new CharacterModel('Onyx', 100, 20, 6, false);
  }

  getActionResultsSubject() {
    return this.actionResultsSubject.asObservable();
  }

  getHero(): CharacterModel {
    return this.hero;
  }

  getEnemy(): CharacterModel {
    return this.enemy;
  }

  getActionResults(): string[] {
    return this.actionResults;
  }

  getCurrentLevel(): number {
    return this.currentLevel;
  }

  async performHeroAction(action: string) {
    if (!this.isGameOver && !this.orcIsDead && this.isHeroTurn) {
      switch (action) {
        case 'attack':
          this.attack();
          break;
        case 'defend':
          this.defend();
          break;
        case 'flee':
          this.flee();
          break;
        default:
          break;
      }
    }
  }

  private isCriticalHit() {
    // Função para verificar se o ataque é crítico com 20% de chance
    return Math.random() <= 0.2;
  }

  attack() {
    if (!this.isGameOver && !this.orcIsDead) {
      this.actionResultsSubject.next(this.actionResults);
      let heroDamage = this.hero.power - this.enemy.defense;

      let attackResult = `O paladino ataca!<br>`;
      if (this.isCriticalHit()) {
        heroDamage *= 2; // Dano dobrado em ataque crítico
        attackResult += 'Ataque crítico!<br>------------------------------------------------<br>';
      }

      if (heroDamage > 0) {
        this.enemy.health -= heroDamage;
        attackResult += `O orc perdeu ${heroDamage} pontos de vida.<br>------------------------------------------------<br>`;

        if (this.enemy.health <= 0) {
          this.orcIsDead = true;
          attackResult += `<br>${this.enemy.name} foi derrotado!`;
        }
      }

      this.actionResults.push(attackResult);

      if (this.enemy.health <= 0) {
        this.isGameOver = true; // O jogo acabou quando o orc morreu
        this.actionResults.push(`O ${this.hero.name} venceu o jogo!`);
      } else {
        // Agora, o turno é passado para o orc
        this.isHeroTurn = false;

        // Execute o ataque do orc imediatamente
        this.attackOrc();
      }
    }
  }

  attackOrc() {
    if (!this.isGameOver && !this.orcIsDead) {
      let orcDamage = this.enemy.power - this.hero.defense;

      let attackResult = `O orc ataca!<br>`;
      if (this.isCriticalHit()) {
        orcDamage *= 2; // Dano dobrado em ataque crítico
        attackResult += 'Ataque crítico do orc!<br>------------------------------------------------<br>';
      }

      if (orcDamage > 0) {
        this.hero.health -= orcDamage;
        attackResult += `O paladino perdeu ${orcDamage} pontos de vida.<br>------------------------------------------------`;
      }

      this.actionResults.push(attackResult);

      if (this.hero.health <= 0) {
        this.isGameOver = true; // O jogo acabou quando o paladino morreu
        this.actionResults.push(`O ${this.hero.name} foi derrotado!`);
      } else {
        // Agora, o turno é passado de volta para o herói
        this.isHeroTurn = true;
      }
    }
  }

  isOrcDead(): boolean {
    return this.orcIsDead;
  }

  defend() {
    if (!this.isGameOver && !this.orcIsDead) {
      this.actionResultsSubject.next(this.actionResults);
      this.hero.guard = true;
      let damage = this.enemy.power - this.hero.defense;

      if (damage > 0) {
        if (this.hero.guard) {
          damage /= 2;
        }
        this.hero.health -= damage;
      }

      const attackResult = `O paladino está se defendendo.<br>O ataque do inimigo causa ${damage} de dano.<br>------------------------------------------------`;

      this.actionResults.push(attackResult);

      if (this.hero.health <= 0) {
        this.isGameOver = true; // O jogo acabou quando o paladino morreu
        this.actionResults.push(`O ${this.hero.name} foi derrotado!`);
      } else {
        // Agora, o turno é passado para o orc
        this.isHeroTurn = false;

        // Execute o ataque do orc imediatamente
        this.attackOrc();
      }
    }
  }

  flee() {
    if (!this.isGameOver && !this.orcIsDead) {
      this.actionResultsSubject.next(this.actionResults);
      const fleeResult = 'O paladino fugiu!';
      this.actionResults.push(fleeResult);

      this.isGameOver = true; // O jogo acabou quando o paladino fugiu
      this.actionResults.push('Fique Mais forte e volte depois!');
    }
  }
}
