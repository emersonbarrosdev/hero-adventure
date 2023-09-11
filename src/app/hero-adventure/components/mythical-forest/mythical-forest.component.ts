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
    this.hero = new HeroCharacterModel('Ealdred', 100, 20, 5, false);
    this.enemy = new EnemyCharacterModel('Kargul', 100, 15, 5);
    this.gameService.setHero(this.hero);
    this.gameService.setEnemy(this.enemy);

    setTimeout(() => {
      this.showLoading = false;
    }, 500);
  }

  private isCriticalHeroHit() {
    const baseChance = this.hero.guard ? 0.5 : 0.2;
    return Math.random() <= baseChance;
  }

  attack() {
    if (!this.isGameOver && !this.orcIsDead && !this.heroIsDead) {
      let heroDamage = this.hero.ATK - this.enemy.DEF;
      let attackResult = `* ${this.hero.name} Ataca! *\n`;
      if (this.isCriticalHeroHit()) {
        heroDamage *= 3;
        attackResult = `** Ataque Crítico Golpe do Caos! **\n `;
        this.actionResults.push(attackResult);
        this.hero.guard = false;
      }

      if (heroDamage > 0) {
        this.enemy.HP -= heroDamage;
        attackResult += `Orc perdeu ${heroDamage} pontos de vida.\n`;

        if (this.enemy.HP <= 0) {
          this.orcIsDead = true;
          this.enemy.HP = 0;
          this.isGameOver = true;
          attackResult += `${this.hero.name} venceu a batalha!`;
          this.actionResults.push(attackResult);
        } else {
          this.isHeroTurn = false;
          setTimeout(() => {
            this.attackOrc();
          }, 500);
        }
        this.gameService.addActionResult(attackResult);
      }
    }
  }

  private isCriticalOrcHit() {
    const baseChance = this.hero.guard ? 0.2 : 0.2;
    return Math.random() <= baseChance;
  }

  attackOrc() {
    if (!this.isGameOver && !this.orcIsDead && !this.heroIsDead) {
      let orcDamage = this.enemy.ATK - this.hero.DEF;
      let attackResult = `* ${this.enemy.name} Ataca! *\n`;

      if (this.isCriticalOrcHit()) {
        orcDamage *= 1.5;
        attackResult = `** Ataque Crítico Fúria Descontrolada! **\n`;
        this.hero.guard = false;
      }

      if (this.hero.guard) {
        orcDamage *= 0.2;
        attackResult += `* Escudo ${this.hero.name} Ativo *\n`;
        attackResult += `Gladiador perdeu ${orcDamage} pontos de vida.\n`;
      } else {
        attackResult += `Gladiador perdeu ${orcDamage} pontos de vida.\n`;
      }

      if (orcDamage > 0) {
        this.hero.HP -= orcDamage;
      }

      this.actionResults.push(attackResult);

      if (this.hero.HP <= 0) {
        this.heroIsDead = true;
        this.hero.HP = 0;
        this.isGameOver = true;
        this.actionResults.push(`${this.enemy.name} venceu a batalha!`);
      } else {
        this.isHeroTurn = true;
      }

      this.gameService.addActionResult(attackResult);
    }
  }


  defend() {
    if (!this.isGameOver && !this.orcIsDead && !this.heroIsDead) {
      if (this.isHeroTurn) {
        this.hero.guard = !this.hero.guard;
        this.isHeroTurn = false;
        setTimeout(() => {
          this.attackOrc();
        }, 500);
      }
    }
  }

  isOrcDead(): boolean {
    return this.orcIsDead;
  }

  nextPhase() {
    this.router.navigate(['/dark-mountains']);
  }

  home() {
    this.router.navigate(['/']);
  }
}
