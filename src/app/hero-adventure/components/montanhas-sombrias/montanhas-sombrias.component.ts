import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-montanhas-sombrias',
  templateUrl: './montanhas-sombrias.component.html',
  styleUrls: ['./montanhas-sombrias.component.scss']
})
export class MontanhasSombriasComponent {
  @Output() choiceMade = new EventEmitter<string>();

  climb() {
    this.choiceMade.emit('Escalar as montanhas');
  }

  exploreCave() {
    this.choiceMade.emit('Explorar a caverna escura');
  }

  goBack() {
    this.choiceMade.emit('Voltar à Floresta Élfica');
  }
}
