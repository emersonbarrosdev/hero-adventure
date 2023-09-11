import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameService } from '../service/game.service';
import { EnemyCharacterModel } from '../../models/enemy-character-model';
import { HeroCharacterModel } from '../../models/hero-character-model';

@Component({
  selector: 'app-actions-battle',
  templateUrl: './actions-battle.component.html',
  styleUrls: ['./actions-battle.component.scss']
})
export class ActionsBattleComponent implements OnInit, OnDestroy {
  hero: HeroCharacterModel;
  enemy: EnemyCharacterModel;
  actionResults: string[] = [];
  private actionResultsSubscription: Subscription;

  @ViewChild('resultBox', { static: false }) resultBox: ElementRef;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.hero = this.gameService.getHero();
    this.enemy = this.gameService.getEnemy();
    this.actionResultsSubscription = this.gameService.actionResults$.subscribe((results) => {
      this.actionResults = results;
      this.scrollToBottom();
    });
  }

  scrollToBottom() {
    setTimeout(() => {
      const resultBoxElement = this.resultBox.nativeElement;
      resultBoxElement.scrollTop = resultBoxElement.scrollHeight;
    });
  }

  isHeroHPZero(): boolean {
    return this.hero.HP <= 0;
  }

 isEnemyHPZero(): boolean {
    return this.enemy.HP <= 0;
  }

  ngOnDestroy() {
    this.actionResultsSubscription.unsubscribe();
  }
}
