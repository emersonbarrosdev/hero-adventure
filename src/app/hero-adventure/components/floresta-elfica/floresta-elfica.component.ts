import { Component, EventEmitter, Output } from '@angular/core';
import { GameService } from '../service/game.service';

@Component({
  selector: 'app-floresta-elfica',
  templateUrl: './floresta-elfica.component.html',
  styleUrls: ['./floresta-elfica.component.scss'],
})
export class FlorestaElficaComponent {
  @Output() choiceMade = new EventEmitter<string>();

  constructor(private gameService: GameService) {}

  // Método para quando o jogador escolher Atacar
  onAttack() {
    this.gameService.attack();
    this.choiceMade.emit('Você escolheu Atacar.');
  }

  // Método para quando o jogador escolher Defender
  onDefend() {
    this.gameService.defend();
    this.choiceMade.emit('Você escolheu Defender.');
  }

  // Método para quando o jogador escolher Fugir
  onFlee() {
    this.gameService.flee();
    this.choiceMade.emit('Você escolheu Fugir.');
  }
}
