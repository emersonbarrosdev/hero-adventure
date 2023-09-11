import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { EnemyCharacterModel } from '../../models/enemy-character-model';
import { HeroCharacterModel } from '../../models/hero-character-model';

@Injectable({
  providedIn: 'root',
})

export class GameService {
  hero: HeroCharacterModel;
  enemy: EnemyCharacterModel;

  private actionResults: string[] = [];
  private actionResultsSubject = new BehaviorSubject<string[]>([]);
  public actionResults$: Observable<string[]> = this.actionResultsSubject.asObservable();

  addActionResult(result: string) {
    this.actionResults.push(result);
    this.actionResultsSubject.next(this.actionResults);
  }

  getHero(): HeroCharacterModel {
    return this.hero;
  }

  setHero(hero: HeroCharacterModel) {
    this.hero = hero;
  }

  getEnemy(): EnemyCharacterModel {
    return this.enemy;
  }

  setEnemy(enemy: EnemyCharacterModel) {
    this.enemy = enemy;
  }
}
