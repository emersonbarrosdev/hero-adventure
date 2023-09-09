import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Character } from '../../models/character';
import { GameService } from '../service/game.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit, OnDestroy {
  hero: Character;
  enemy: Character;
  actionResults: string[] = [];
  private actionResultsSubscription: Subscription;

  @ViewChild('resultBox', { static: false }) resultBox: ElementRef;

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.hero = this.gameService.getHero();
    this.enemy = this.gameService.getEnemy();
    this.actionResultsSubscription = this.gameService.getActionResultsSubject().subscribe((results) => {
      this.actionResults = results;
      this.scrollToBottom();
    });
  }

  ngOnDestroy() {
    // Certifique-se de cancelar a inscrição para evitar vazamentos de memória
    this.actionResultsSubscription.unsubscribe();
  }

  // Método para rolar a caixa de mensagens para baixo
  scrollToBottom() {
    setTimeout(() => {
      const resultBoxElement = this.resultBox.nativeElement;
      resultBoxElement.scrollTop = resultBoxElement.scrollHeight;
    });
  }
}
