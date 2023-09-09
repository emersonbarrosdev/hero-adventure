import { Component, ViewChild } from '@angular/core';
import { Game } from '../models/game';
import { InfoComponent } from './info/info.component';

@Component({
  selector: 'app-hero-adventure',
  templateUrl: './hero-adventure.component.html',
  styleUrls: ['./hero-adventure.component.scss']
})
export class HeroAdventureComponent {
  game: Game = new Game();
  gameStarted = false;

  currentLevel: number = 1;
  actionResults: string[] = [];

  @ViewChild(InfoComponent, { static: false }) infoComponent: InfoComponent;

  addMessage(message: string) {
    this.game.actionResults.push(message);
    if (this.infoComponent) {
      this.infoComponent.scrollToBottom();
    }
  }

  onGameStarted() {
    this.gameStarted = true;
  }

  onChoiceMade(choice: string) {
    this.actionResults.push(choice);

    // Avançar para o próximo nível ou terminar o jogo
    if (this.currentLevel < 3) {
      this.currentLevel++;
    } else {
      // Fim do jogo
      this.actionResults.push("Você concluiu sua jornada!");
    }
  }

}
