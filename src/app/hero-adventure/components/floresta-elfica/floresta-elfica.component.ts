import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-floresta-elfica',
  templateUrl: './floresta-elfica.component.html',
  styleUrls: ['./floresta-elfica.component.scss']
})
export class FlorestaElficaComponent {
  @Output() choiceMade = new EventEmitter<string>();

  explore() {
    this.choiceMade.emit('Explorar a floresta');
  }

  rest() {
    this.choiceMade.emit('Descansar sob uma árvore');
  }

  followPath() {
    this.choiceMade.emit('Seguir o caminho misterioso');
  }
}
