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
    this.hero = new HeroCharacterModel('Alast', 100, 10, 5, false);
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
      // Quando o herói decide atacar, a defesa é automaticamente cancelada
      this.hero.guard = false;

      let heroDamage = this.hero.ATK - this.enemy.DEF;
      let attackResult = `${this.hero.name} ataca!`;
      if (this.isCriticalHit()) {
        heroDamage *= 2;
        attackResult = `Ataque crítico de ${this.hero.name}!`;
        this.actionResults.push(attackResult);
      }

      if (heroDamage > 0) {
        this.enemy.HP -= heroDamage;
        attackResult += `Orc perdeu ${heroDamage} pontos de vida.`;

        if (this.enemy.HP <= 0) {
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
      let orcDamage = this.enemy.ATK - this.hero.DEF;
      let attackResult = `${this.enemy.name} ataca!`;

      if (this.hero.guard) {
        // Quando o herói está em modo de defesa, o dano do orc é reduzido em 60%
        orcDamage *= 0.2;
        attackResult += `${this.hero.name} está se defendendo. O dano foi de ${orcDamage}.`;
      } else {
        attackResult += `O ${this.hero.name} perdeu ${orcDamage} pontos de vida.`;
      }

      if (orcDamage > 0) {
        this.hero.HP -= orcDamage;
      }

      this.actionResults.push(attackResult);

      if (this.hero.HP <= 0) {
        this.heroIsDead = true;
        this.isGameOver = true;
        this.actionResults.push(`O ${this.enemy.name} venceu o jogo!`);
      } else {
        this.isHeroTurn = true;
      }

      this.gameService.addActionResult(attackResult);
    }
  }


  defend() {
    if (!this.isGameOver && !this.orcIsDead && !this.heroIsDead) {
      if (this.isHeroTurn) { // Apenas o herói pode se defender quando é o turno dele
        this.hero.guard = !this.hero.guard; // Ativa ou desativa o modo de defesa

        if (this.hero.guard) {
          this.actionResults.push(`${this.hero.name} está se defendendo.`);
        } else {
          this.actionResults.push(`${this.hero.name} está pronto para o combate.`);
        }

        this.isHeroTurn = false;

        setTimeout(() => {
          this.attackOrc();
        }, 1000);
      }
    }
  }

  isOrcDead(): boolean {
    return this.orcIsDead;
  }

  nextPhase() {
    console.log('PRÓXIMA FASE');
  }

  home() {
    this.router.navigate(['/']);
  }
}
