import { Component } from '@angular/core';
import { HeroCharacterModel } from '../../models/hero-character-model';
import { GameService } from '../service/game.service';
import { EnemyCharacterModel } from '../../models/enemy-character-model';

@Component({
  selector: 'app-elf-forest',
  templateUrl: './elf-forest.component.html',
  styleUrls: ['./elf-forest.component.scss']
})
export class ElfForestComponent {
  private hero: HeroCharacterModel;
  private enemy: EnemyCharacterModel;
  private orcIsDead: boolean = false;
  private isHeroTurn: boolean = true;
  private isGameOver: boolean = false;
  public actionResults: string[] = [];

  constructor(private gameService: GameService) {
    this.hero = new HeroCharacterModel('Alast', 100, 10, 5, false);
    this.enemy = new EnemyCharacterModel('Onyx', 100, 20, 6);
    this.gameService.setHero(this.hero);
    this.gameService.setEnemy(this.enemy);
  }

  getActionResults(): string[] {
    return this.actionResults;
  }

  private isCriticalHit() {
    const baseChance = this.hero.guard ? 0.5 : 0.2;
    return Math.random() <= baseChance;
  }

  attack() {
    if (!this.isGameOver && !this.orcIsDead) {
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
        attackResult = `O ${this.hero.name} venceu o jogo!`;
        this.actionResults.push(attackResult);
      } else {
        // Agora, o turno é passado para o orc
        this.isHeroTurn = false;

        // Execute o ataque do orc imediatamente
        this.attackOrc();
      }

      this.gameService.addActionResult(attackResult);
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
      this.gameService.addActionResult(attackResult);
    }
  }

  isOrcDead(): boolean {
    return this.orcIsDead;
  }

  defend() {
    if (!this.isGameOver && !this.orcIsDead) {
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

      this.gameService.addActionResult(attackResult);
    }
  }

  flee() {
    if (!this.isGameOver && !this.orcIsDead) {
      const fleeResult = 'O paladino fugiu!';
      this.actionResults.push(fleeResult);

      this.isGameOver = true; // O jogo acabou quando o paladino fugiu
      this.actionResults.push('Fique Mais forte e volte depois!');
    }
  }
}
