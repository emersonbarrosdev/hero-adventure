import { Component, ViewChild } from '@angular/core';
import { InfoComponent } from './info/info.component';
import { GameService } from './service/game.service';

@Component({
  selector: 'app-hero-adventure',
  templateUrl: './hero-adventure.component.html',
  styleUrls: ['./hero-adventure.component.scss']
})
export class HeroAdventureComponent {
  gameStarted = false;
  currentLevel: number = 1;
  actionResults: string[] = [];

  @ViewChild(InfoComponent, { static: false }) infoComponent: InfoComponent;

  constructor(public gameService: GameService) {}

  addMessage(message: string) {
    this.gameService.getActionResults().push(message);
    if (this.infoComponent) {
      this.infoComponent.scrollToBottom();
    }
  }

  onGameStarted() {
    this.gameStarted = true;
  }

  onChoiceMade(choice: string) {
  this.actionResults.push(choice);

  if (this.gameService.isOrcDead() && this.currentLevel < 3) {
    this.currentLevel++;
    // Adicione uma mensagem para indicar o avanço para a próxima fase
    this.actionResults.push("Você avançou para a próxima fase!");
  } else if (this.gameService.isOrcDead()) {
    // Fim do jogo após a terceira fase
    this.actionResults.push("Você concluiu sua jornada!");
  }
}

}
