import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-start',
  templateUrl: './game-start.component.html',
  styleUrls: ['./game-start.component.scss']
})
export class GameStartComponent {
  @Output() gameStarted = new EventEmitter<void>();

  startGame() {
    this.gameStarted.emit();
  }
}
