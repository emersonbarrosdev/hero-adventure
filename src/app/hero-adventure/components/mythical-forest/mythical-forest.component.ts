import { Component } from '@angular/core';
import { HeroCharacterModel } from '../../models/hero-character-model';
import { GameService } from '../service/game.service';
import { EnemyCharacterModel } from '../../models/enemy-character-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mythical-forest',
  templateUrl: './mythical-forest.component.html',
  styleUrls: ['./mythical-forest.component.scss']
})
export class MythicalForestComponent {
  hero: HeroCharacterModel;
  enemy: EnemyCharacterModel;
  orcIsDead: boolean = false;
  heroIsDead: boolean = false;
  isHeroTurn: boolean = true;
  isGameOver: boolean = false;
  actionResults: string[] = [];
  showLoading: boolean = true;

  constructor(
    private gameService: GameService,
    private router: Router
  ) {
    this.hero = new HeroCharacterModel('Alast', 10, 10, 5, false);
    this.enemy = new EnemyCharacterModel('Onyx', 100, 20, 6);
    this.gameService.setHero(this.hero);
    this.gameService.setEnemy(this.enemy);

    setTimeout(() => {
      this.showLoading = false;
    }, 1000);
  }

  private isCriticalHit() {
    const baseChance = this.hero.guard ? 0.5 : 0.2;
    return Math.random() <= baseChance;
  }

  attack() {
    if (!this.isGameOver && !this.orcIsDead && !this.heroIsDead) {
      let heroDamage = this.hero.power - this.enemy.defense;
      let attackResult = `${this.hero.name} ataca!`;
      if (this.isCriticalHit()) {
        heroDamage *= 2;
        attackResult = `Ataque crítico de ${this.hero.name}!`;
        this.actionResults.push(attackResult);
      }

      if (heroDamage > 0) {
        this.enemy.health -= heroDamage;
        attackResult += `O orc perdeu ${heroDamage} pontos de vida.`;

        if (this.enemy.health <= 0) {
          this.orcIsDead = true;
          this.isGameOver = true;
          attackResult += `O ${this.hero.name} venceu o jogo!`;
          this.actionResults.push(attackResult);
        } else {
          this.isHeroTurn = false;
          setTimeout(() => {
            this.attackOrc();
          }, 1000);
        }
        this.gameService.addActionResult(attackResult);
      }
    }
  }

  attackOrc() {
    if (!this.isGameOver && !this.orcIsDead && !this.heroIsDead) {
      let orcDamage = this.enemy.power - this.hero.defense;
      let attackResult = `${this.enemy.name} ataca!`;

      if (orcDamage > 0) {
        this.hero.health -= orcDamage;
        attackResult += `O paladino perdeu ${orcDamage} pontos de vida.`;

        if (this.hero.health <= 0) {
          this.heroIsDead = true;
          this.isGameOver = true;
          attackResult += `O ${this.enemy.name} venceu o jogo!`;
          this.actionResults.push(attackResult);
        } else {
          this.isHeroTurn = true;
        }
      }
      this.gameService.addActionResult(attackResult);
    }
  }

  isOrcDead(): boolean {
    return this.orcIsDead;
  }

  defend() {
    if (!this.isGameOver && !this.orcIsDead && !this.heroIsDead) {
      this.hero.guard = true;
      let damage = this.enemy.power - this.hero.defense;

      if (damage > 0) {
        if (this.hero.guard) {
          damage /= 2;
        }
        this.hero.health -= damage;
      }

      let attackResult = `O paladino está se defendendo.<br>O ataque do inimigo causa ${damage} de dano.<br>------------------------------------------------`;

      this.actionResults.push(attackResult);

      if (this.hero.health <= 0) {
        this.isGameOver = true;
        this.actionResults.push(`O ${this.hero.name} foi derrotado!`);
      } else {
        this.isHeroTurn = false;

        setTimeout(() => {
          this.attackOrc();
        }, 1000);
      }
      this.gameService.addActionResult(attackResult);

    }
  }

  nextPhase() {
    console.log('PRÓXIMA FASE');
  }

  home() {
    this.router.navigate(['/']);
  }
}
